const express = require("express");
const router = express.Router();

const { authenticate } = require("../services/productsService");
const { generalResponse } = require("../helpers/responses");
const { mockData, mockError } = require("../helpers/mock-data");

router.route("/").get((req, res) => {
  const { headers } = req;
  if (authenticate(headers)) {
    return generalResponse(200, res, mockData);
  }
  generalResponse(401, res, mockError);
});

module.exports = router;
