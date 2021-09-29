const { Country, Activity, Op} = require("../db");
const axios=require("axios");
 const Data=require("../../countries.json"); 


async function data(){

     
       for(var i=0; i<Data.length; i++) {
        Country.create({
        id: Data[i].alpha3Code,
        name: Data[i].name,
        image: Data[i].flag,
        continent: Data[i].region,
        capital: Data[i].capital,
        subregion: Data[i].subregion,
        area: Data[i].area,
        population: Data[i].population 
      }) 
    } 
      
  }
  
  
async function getCountriesOrder(req,res,next){
try {
  let {order} =req.params;
   let {page} =req.query;7
  if(!page) page=1;
  const itemsPerPage=10; 
  let first=0;
  if(page==1 || !page){
    first=1;
  }
  let data= await Country.findAll();
  let orderData=[];
  if(order==="asc") orderData =data.sort((a,b)=> a.name.localeCompare(b.name));
  if(order==="desc") orderData= data.sort((a,b)=> b.name.localeCompare(a.name));
  if(order==="larger") orderData= data.sort((a, b)=> b.population - a.population);
  if(order==="smaller") orderData= data.sort((a, b)=> a.population - b.population);
  res.json( orderData.slice(itemsPerPage *(page -1), ((itemsPerPage * (page- 1))+ itemsPerPage) - first));
} catch (error) {
  next(error)
}

}
async function getAllCountries(req, res, next) {
  try {
      
      Country.findAll()
       .then(data => res.json(data))
      
  } catch (error) {
      next(error);
  }
};


async function getOneCountry (req, res, next) {
try {
  const {id} = req.params;
  let country= await Country.findOne({where: {id: id}, include: {model: Activity}});
  console.log(country);
  res.json(country);
} catch (error) {
  next(error)
}
};



async function getCountries(req, res, next) {
    try {
        let {name} =req.query;
        let {page} =req.query;
        let itemsPerPage=10;
        var first=0;
        var next;
        if(!page) { 
          
          page = 1;
          
        }
        if(page==1 || !page){
          first=1
        }
        if(page==2) next=1
        if(page>2){
          next=0
        };
       
        console.log(first)
        if(name !== undefined){
          const country = await Country.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`
              }
            }, include: {model: Activity}
          })
          console.log("matches;",country);
          return res.json(country); 
        }else {
        Country.findAll()
         .then(data => res.json(data.slice((itemsPerPage *(page -1)- next), ((itemsPerPage * (page- 1))+ itemsPerPage)- first)));
        }
    } catch (error) {
        next(error);
    }
};


async function getOneCountry (req, res, next) {
  try {
    const {id} = req.params;
    let country= await Country.findOne({where: {id: id}, include: {model: Activity}});
    console.log(country);
    res.json(country);
  } catch (error) {
    next(error)
  }
};

/* async function getQuery (req, res, next) {
  try {
  
    const {name} =req.query;
    const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    })
    console.log("matches;",country);
    res.json(country); 

  } catch (error) {
    next (error);
  }
}; */

module.exports = { 
  getCountries,
  data,
  getOneCountry,
  getCountriesOrder,
  getAllCountries
  
};

