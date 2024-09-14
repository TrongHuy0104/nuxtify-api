const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// Page Home
app.get("/", (req, res) => {
    res.send("SERVER ON");
});

// ZingMp3Router
const NuxtifyRouter = require("./src/routes/NuxtifyRouter");
app.use("/api", cors({ origin: "*" }), NuxtifyRouter);

// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`);
});
