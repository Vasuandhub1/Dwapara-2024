const express = require ("express");
const { Authentication } = require("../controllers/AuthController");
const { createSchedule } = require("../controllers/scheduleController");
const router = express.Router()


router.post("/create"  , Authentication ,createSchedule)

module.exports = router;

