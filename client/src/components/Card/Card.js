import React, {useEffect, useState} from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";



function Card ({key, name, id, image, continent}){
    return (
        <div className={style.card} key={key}>
                     <div >
                      <img width="100px" src={image} alt=""  className={style.img} />
                      </div>
                      <div className={style.name}>
                      <NavLink to={`/detail/${id}`} className={style.title}> <p className={style.title}>{name}</p> </NavLink>
                      </div> 
                      <p className={style.continent}>{continent}</p>
                      
                  </div>  
    )
}



export default Card;