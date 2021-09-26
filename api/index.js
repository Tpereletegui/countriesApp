//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country} = require('./src/db.js');
const axios=require("axios");
const {data} =require("./src/controllers/countries");

/* async function data(){
  const countries= await axios.get("https://restcountries.eu/rest/v2/all");
  const data= countries.data
    for(var i=0; i < data.length; i++) {
    Country.create({
      id: data[i].alpha3Code,
      name: data[i].name,
      image: data[i].flag,
      continent: data[i].region,
      capital: data[i].capital,
      subregion: data[i].subregion,
      area: data[i].area,
      population: data[i].population 
    })
  }

} */

// Syncing all the models at once.
conn.sync({force: false}).then(async function() {
  server.listen(3001, async () => {
    console.log('%s listening at 3001');
    let checkdatabase= await Country.findAll();
    if(checkdatabase.length <=0 ) data();
    // eslint-disable-line no-console
  });
});
