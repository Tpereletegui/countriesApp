const {Router} =require ("express");
const {getCountries, getOneCountry, getCountriesOrder} =require ("../controllers/countries");
const router= Router();

router.get("/countries", getCountries);
router.get("/country/:id", getOneCountry)
router.get("/countries/:order", getCountriesOrder);
/* router.get("/countries", getQuery) */ 




module.exports = router;