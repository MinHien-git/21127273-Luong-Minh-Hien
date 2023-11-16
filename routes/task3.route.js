const express = require("express");
const router = express.Router();

router.get("/task3", require("../controllers/task3.controller").show);
module.exports = router;
