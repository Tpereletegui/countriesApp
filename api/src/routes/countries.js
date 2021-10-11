const {Router} =require ("express");
const {getCountries, getOneCountry, getCountriesOrder, getAllCountries} =require ("../controllers/countries");
const router= Router();

router.get("/countries", getCountries);
router.get("/countries/all",getAllCountries )
router.get("/country/:id", getOneCountry)
router.get("/countries/:order", getCountriesOrder);





module.exports = router;