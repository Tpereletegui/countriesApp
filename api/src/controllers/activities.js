const { Country, Activity, Op} = require("../db");
const axios=require("axios");

 async function createActivity(req, res, next) {
    try {
    const {name, difficulty, duration, season, countries} =req.body;
    // no controlo los datos, eso lo hago desde el formulario controlado
    
    const newActivity = await Activity.create({
        name: name.toUpperCase(),
        difficulty: parseInt(difficulty),
        duration: parseInt(duration),
        season: season
       //
    });
    // here, i add the countres of the form
    let filter=await countries.map(c => {
      console.log("c",c)
      Country.findByPk(c).then(country=> {
        console.log("country", country)
        newActivity.addCountry(country)})})
     
    
    res.send(newActivity)
    
    
     

    }catch(error) {
        next (error);
    } 
}; 


async function getActivities (req, res, next) {
    try {
        const {order} =req.query;
        if(order==="all"){
            let activities=await Activity.findAll({include: {model: Country}});
            res.json(activities)
        }else{
            if(order.length>1) {
                var activities= await Activity.findAll({
                where:{
                    season: order
                },
                include: {
                    model: Country
                }
              });
              res.json(activities)
            }
            if(order.length===1 ){ 
                let activities= await Activity.findAll({
                where:{
                    difficulty: parseInt(order)
                },
                include: {
                    model: Country
                }
            })
            res.json(activities)
        }
        }
       

    } catch (error) {
        next(error)
    }
}





module.exports = { 
    createActivity,
    getActivities 
    
  };
  