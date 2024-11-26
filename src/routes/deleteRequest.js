const express = require("express");
const deleteRequestController = require("../controllers/deleteRequest");

const router = express.Router();

router.post("/", deleteRequestController.create);

module.exports = router;
