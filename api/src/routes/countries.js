const {Router} =require ("express");
const {getCountries, getOneCountry, getQuery} =require ("../controllers/countries");
const router= Router();

router.get("/countries", getCountries);
/* router.get("/countries", getQuery) */ 
router.get("/countries/:id", getOneCountry)



module.exports = router;