const express = require("express");
const router = express.Router();

const { authenticate } = require("../services/loansService");
const { mockData, authMissingError, authFailedError } = require("../helpers/loans-mock-data");

router.route("/").get((req, res) => {
  const { headers } = req;
  if (!headers.authentication){
    return res.status(401).json(authMissingError);
  };
  if (authenticate(headers)) {
    return res.json(mockData);
  };
  res.status(403).json(authFailedError);
});

module.exports = router;
