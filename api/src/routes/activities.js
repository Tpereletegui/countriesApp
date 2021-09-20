const {Router} =require ("express");
const {createActivity} = require("../controllers/activities");
const router= Router();


router.post("/activity", createActivity);




module.exports = router;