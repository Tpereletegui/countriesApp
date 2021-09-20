const { Country, Activity, Op} = require("../db");
const axios=require("axios");

async function createActivity(req, res, next) {
    try {
    const {name, difficulty, duration, season, countries} =req.body;
    // no controlo los datos, eso lo hago desde el formulario controlado
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season
    });
    console.log("countries: ", countries)
        let arr=[]
        for(var i=0; i<countries.length; i++){
            
            let country= await Country.findOne({where: {name: countries[i]}});
            console.log("pais: ", country);
            arr.push(country);
        }
        console.log("arr: ",arr);

    for(var j=0; j<arr.length;j++){

     await newActivity.addCountry(arr[j]);   
    }
     
    res.json(newActivity);

    }catch(error) {
        next (error);
    } 
};








module.exports = { 
   createActivity
    
  };
  