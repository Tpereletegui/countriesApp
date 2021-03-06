import React, {useEffect, useState, lazy, Suspense} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import {getCountries, getCountriesOrder, sortCountriesContinent, removeCountries} from "../../redux/actions"; 
import style from "./home.module.css";
//import { Button } from "@mui/material";
import Boton from "../Button/Button.js";
import Loading from "../../gif.gif";
import Card from "../Card/Card.js";
import { styled, alpha } from '@mui/material/styles';






function Home() {
    
    

    let countries= useSelector (state => state.countries)
    let history= useHistory();
    const dispatch= useDispatch();
    const [page, setPage] = useState(1);
    const [order, setOrder] =useState("");
    const location =useLocation();
    
       useEffect(()=> {
         async function paises(){
           try {
             await dispatch(getCountries(1))
           } catch (error) {
             
           }
         }    
         paises()     
    }, [dispatch, countries]);  
     
    
    function handleChange(e){
     if(e.target.value==="all"){ 
       dispatch(getCountries(1));
      
    }
     else {
         setOrder(e.target.value);
         setPage(1);
         dispatch(getCountriesOrder(e.target.value, 1))
         dispatch(removeCountries());
         
      }   
    } 

   function pages(e) {
        if(e.target.value==="next"){
            window.scrollTo(0, 0)
            dispatch(getCountriesOrder(order, page + 1));
            dispatch(removeCountries())
            setPage(page + 1);
            
        }
        else {
            window.scrollTo(0, 0)
            dispatch(getCountriesOrder(order, page - 1));
            dispatch(removeCountries())
            setPage(page - 1);
            
        }
    } 

    
    return (
        
        <div className={style.contenedor}>
             <Nav className={style.navbar}/> 
            
             <div className={style.filters}>

             <select className={style.select} onChange={handleChange}>
             <option value="all">All</option>
                <optgroup className={style.optgroup} label="Alphabetic">
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                  </optgroup>
                 <optgroup className={style.optgroup} label="Population"> 
                  <option value="larger"> Largest</option>
                  <option value="smaller"> Smallest</option>
                  </optgroup>
                <optgroup className={style.optgroup} label="Area"> 
                  <option value="grand"> Largest</option>
                  <option value="petit"> Smallest</option>
                  </optgroup>
                  
                <optgroup label="Continent" className={style.optgroup}>
                  <option value="-">-</option>
                  <option value="Europe">Europe</option>
                 <option value="Americas">Americas</option>
                 <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="Oceania">Oceania</option>
                </optgroup>

             </select>

             

         

            </div>
            

            <div className={style.cards}> 
             {
            countries.length?
            countries.map((e, i)=>{
                return (
                  <Suspense fallback={<h1>cargando</h1>}>
                <div className={style.home_cards}>
                 
                  <Card
                    key={i}
                    name={e.name}
                    image={e.image}
                    continent={e.continent}
                    id={e.id}
                    />
                </div>
                </Suspense>
                )}): 
                   null
                
                }
                
                </div>
            
            <div className={style.buttons}>
            
              
            <Boton onClick={pages} name="Previous" value="previous" disabled={page===1} style={{backgroundColor: '#00ADB5', color: '#000000'}} >Previous</Boton>
            <Boton onClick={pages} name="Next" value="next" disabled={countries.length < 9  || countries.length >40} style={{backgroundColor: '#00ADB5', color: '#000000'}}>Next</Boton>
            </div>
        </div>
        )
    
}



export default Home;