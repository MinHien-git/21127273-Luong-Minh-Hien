const express = require("express");
const router = express.Router();

router.get("/task1", require("../controllers/task1.controller").show);
module.exports = router;
