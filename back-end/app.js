require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { PATHS } = require("./config");
const productsRoutes = require("./routers/productsRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(PATHS.products, productsRoutes);

app.get("*", (req, res) => res.send("Page Not found 404"));

module.exports = app;
