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
        const {order} =req.query;
        console.log(order.length)
        /* let activities= await Activity.findAll({include: {model: Country}}); */
        /* console.log(activities); */
        let orderData;
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
        if(order.length<=1 ){ 
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

        /* if(order==="-") orderData = activities;
        if(order==="1")orderData= await activities.find(x => x.difficulty === parseInt(order));
        if(order==="2")orderData= await activities.find(x => x.difficulty === parseInt(order));
        if(order==="3")orderData= await activities.find(x => x.difficulty === parseInt(order));
        if(order==="4")orderData= activities.find(x => x.difficulty === parseInt(order));
        if(order==="5")orderData= activities.find(x => x.difficulty === parseInt(order));
        if(order==="summer")  orderData= activities.find(x => x.season === order)
        if(order==="winter")  orderData= activities.find(x => x.season === order) 
        if(order==="spring")  orderData= activities.find(x => x.season === order) 
        if(order==="autumn")  orderData= activities.find(x => x.season === order)   */
        /* console.log(activities) */
        /* res.json(order) */
    } catch (error) {
        next(error)
    }
}





module.exports = { 
    createActivity,
    getActivities 
    
  };
  