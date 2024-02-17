const express = require ("express")
const { CreateOpportunity, getAllOpportunities } = require("../controllers/OpportunyController")

const router = express.Router()


router.post ("/createOppo" , CreateOpportunity)
router.get ("/allOppo" , getAllOpportunities)

module.exports = router