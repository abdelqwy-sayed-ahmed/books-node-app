"use strict";
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("users route work well");
});

module.exports = router;
