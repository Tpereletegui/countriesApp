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
const express= require("express");
const { conn, Country} = require('./src/db.js');
const axios=require("axios");
const {data} =require("./src/controllers/countries");
const cors= require("cors");
const path=require("path")
const PORT = process.env.PORT || 3001
server.use(cors());

if(process.env.NODE_ENV === "production") {
	server.use(express.static(path.join(__dirname,"client/build")))
}

console.log(__dirname,"client/build")

// Syncing all the models at once.
conn.sync({force: false}).then(async function() {
  server.listen(PORT, async () => {
    console.log("listening at port " + PORT);
    let checkdata =await Country.findAll();
    if(checkdata.length <= 1){
      data();
      
    }
    // eslint-disable-line no-console
  });
});
