const express = require("express");
const router = express.Router();
const NuxtifyController = require("../controllers/NuxtifyController");

// getSong
router.get("/song", NuxtifyController.getSong);

module.exports = router;
