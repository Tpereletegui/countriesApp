const {Router} =require ("express");
const {createActivity, getActivities} = require("../controllers/activities");
const router= Router();


router.post("/activity", createActivity);
router.get("/activities", getActivities)




module.exports = router;