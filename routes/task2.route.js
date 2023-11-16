const express = require("express");
const router = express.Router();

router.get("/task2", require("../controllers/task2.controller").show);

module.exports = router;
