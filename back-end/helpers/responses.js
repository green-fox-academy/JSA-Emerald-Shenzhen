const generalResponse = (stausCode, res, data = {}) => {
  res.statusCode = stausCode;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify(data));
};

module.exports = {
  generalResponse
};
