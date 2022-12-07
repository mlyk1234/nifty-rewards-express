const express = require("express");
const router = express.Router();

const {
  getBanner,
} = require("../controllers/Common");

router.route("/").get(getBanner);

module.exports = router;
