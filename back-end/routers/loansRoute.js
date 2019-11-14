const express = require("express");
const router = express.Router();

const { authenticate } = require("../services/loansService");
const { generalResponse } = require("../helpers/responses");
const { mockData, authMissingError, authFailedError } = require("../helpers/loans-mock-data");

router.route("/").get((req, res) => {
  const { headers } = req;
  if (!headers.authentication){
    return generalResponse(401, res, authMissingError);
  };
  if (authenticate(headers)) {
    return generalResponse(200, res, mockData);
  };
  generalResponse(403, res, authFailedError);
});

module.exports = router;
