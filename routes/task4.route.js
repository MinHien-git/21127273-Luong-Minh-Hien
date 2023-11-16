const express = require("express");
const router = express.Router();

router.get("/task4", require("../controllers/task4.controller").show);
router.get("/task4/:n", require("../controllers/task4.controller").showDetail);

module.exports = router;
