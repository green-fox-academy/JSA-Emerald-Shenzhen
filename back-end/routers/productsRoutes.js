const express = require("express");
const router = express.Router();

const { authenticate } = require("../services/authService");
const mock = require("../helpers/mock-data");

router.route("/").get((req, res) => {
  const { headers } = req;
  if (!authenticate(headers)) {
    res.status(401).send(mock.error);
    return;
  }
  res.status(200).send(mock.data);
});

module.exports = router;
