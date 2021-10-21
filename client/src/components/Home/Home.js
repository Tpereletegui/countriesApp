import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";
import Activities from "../Activities/Activities";
import {getCountries, getCountriesOrder, sortCountriesContinent, removeCountries} from "../../redux/actions"; 
import "./home.css";
import { Button,  Menu, MenuItem } from "@mui/material";



function Home() {
    
    

    let countries= useSelector (state => state.countries)
    let history= useHistory();
    const dispatch= useDispatch();
     
    const [page, setPage] = useState(1);
    const [order, setOrder] =useState("")
    
    
       useEffect(()=> {
        dispatch(getCountries(1))
    }, [dispatch]);  
     
    
    function handleChange(e){
     if(e.target.value==="all"){ 
      dispatch(removeCountries())
      dispatch(getCountries(1));
      
    }
     else {
         setOrder(e.target.value);
         setPage(1);
         dispatch(removeCountries());
         dispatch(getCountriesOrder(e.target.value, 1))
         
      }   
    } 

   function pages(e) {
        if(e.target.value==="next"){
            window.scrollTo(0, 0)
            dispatch(removeCountries())
            dispatch(getCountriesOrder(order, page + 1));
            setPage(page + 1);
            
        }
        else {
            window.scrollTo(0, 0)
          dispatch(removeCountries())
            dispatch(getCountriesOrder(order, page - 1));
            setPage(page - 1);
            
        }
    } 

    function handleSelectContinent(e) {
        if(e.target.value==="-") {
          dispatch(removeCountries())
            dispatch(getCountries(1))
            

        }else{
          dispatch(removeCountries())
          dispatch(sortCountriesContinent(e.target.value))
          
        }
    }

    
    return (
        
        <div className="contenedor">
             <Nav/> 

             <div className="filters">
             <label>Filters</label>
             <select className="select" onChange={handleChange}>
             <option value="all">All</option>
                <optgroup className="optgroup" label="Alphabetic">
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                  </optgroup>
                 <optgroup className="optgroup" label="Population"> 
                  <option value="larger"> Largest</option>
                  <option value="smaller"> Smallest</option>
                  </optgroup>
                <optgroup className="optgroup" label="Area"> 
                  <option value="grand"> Largest</option>
                  <option value="petit"> Smallest</option>
                  </optgroup>
                  
                <optgroup label="Continent">
                  <option value="-">-</option>
                  <option value="Europe">Europe</option>
                 <option value="Americas">Americas</option>
                 <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="Oceania">Oceania</option>
                </optgroup>

             </select>

            {/*<label className="label">Order</label>
            <select  onChange={handleChange} >
                
                <option value="all">All</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="larger">Population: Largest</option>
                <option value="smaller">Population: Smallest</option>
             </select>
            <label className="label">Continent</label>
            <select  onChange={handleSelectContinent} > 
                <option value="-">-</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select> */}
            </div>
            

            <div className="cards"> 
             {
            console.log(countries)
                
                }
                
                </div>
            
            <div className="buttons">
            {/*<button onClick={pages} value="previous" disabled={page===1} >Previous</button>
            <button onClick={pages} value="next" disabled={countries.length < 9  || countries.length >40} >Next</button>
            </div>  */}
            <Button onClick={pages} value="previous" disabled={page===1} style={{backgroundColor: '#FCBE40', color: '#000000'}} >Previous</Button>
            <Button onClick={pages} value="next" disabled={countries.length < 9  || countries.length >40} style={{backgroundColor: '#FCBE40', color: '#000000'}}>Next</Button>
            </div>
        </div>
        )
    
}



export default Home;