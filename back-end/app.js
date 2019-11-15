require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { PATHS } = require("./config");

const productsRoutes = require("./routers/productsRoutes");
const loansRoutes = require("./routers/loansRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(PATHS.products, productsRoutes);
app.use(PATHS.loans, loansRoutes);

app.get("*", (req, res) => res.send("Page Not found 404"));

module.exports = app;
