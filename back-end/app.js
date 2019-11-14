require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

//-------------------------root path-----------------------------//
const { PATHS } = require("./config");
const { products } = PATHS;

//-------------------------root router-----------------------------//
const productsRoute = require("./routers/productsRoute");

//-------------------------middlewares-----------------------------//
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(products, productsRoute);

app.get("*", (req, res) => res.send("Page Not found 404"));

module.exports = app;
