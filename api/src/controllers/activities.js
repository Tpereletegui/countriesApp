const { Country, Activity, Op} = require("../db");
const axios=require("axios");

 async function createActivity(req, res, next) {
    try {
    const {name, difficulty, duration, season, countries} =req.body;
    // no controlo los datos, eso lo hago desde el formulario controlado
    const newActivity = await Activity.create({
        name: name,
        difficulty: parseInt(difficulty),
        duration: parseInt(duration),
        season: season
    });
    
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
        const {order} =req.params;
        let activities= await Activity.findAll();
        let orderData=[];
        if(!order) orderData= activities;
        if(order.length===1) orderData= activities.filter(x => x.difficulty === parseInt(order));
        if(order.length>1)  orderData= activities.filter(x => x.season === order)
        res.json(orderData)
    } catch (error) {
        next(error)
    }
}





module.exports = { 
    createActivity,
    getActivities 
    
  };
  