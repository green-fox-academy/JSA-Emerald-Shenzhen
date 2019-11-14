require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { PATHS } = require("./config");

//-------------------------root router-----------------------------//
const productsRoute = require("./routers/productsRoutes");
const loansRoute = require("./routers/loansRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(PATHS.products, productsRoute);
app.use(PATHS.loans, loansRoute);

app.get("*", (req, res) => res.send("Page Not found 404"));

module.exports = app;
