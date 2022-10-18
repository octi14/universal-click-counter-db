const express = require("express");
const router = express.Router();

const NumberController = require("../controllers/number.controller");

// "/numbers" endpoints
router.get("/", NumberController.get);
router.post("/", NumberController.add);
router.put("/", NumberController.update);
module.exports = router;
