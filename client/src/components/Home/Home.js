import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";
import Activities from "../Activities/Activities";
import {getCountries, getCountriesOrder, sortCountriesContinent, removeCountries} from "../../redux/actions"; 
import "./home.css";



function Home() {
    
    

    let countries= useSelector (state => state.countries)
    let history= useHistory();
    const dispatch= useDispatch();
     
    const [page, setPage] = useState(1);
    const [order, setOrder] =useState("")
    
    
       useEffect(()=> {
        dispatch(removeCountries());
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
            <label className="label">Order</label>
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
            </select>
            </div>
            

            <div className="cards"> 
             {
            countries.length?
            countries.map((e, i)=>{
                {console.log(countries)}
                return (
                    <div className="card" key={i}>
                        <div className="imagen">
                      <img width="100px" src={e.image} alt=""  className="img" />
                      </div>
                      <div className="name">
                      <NavLink to={`/detail/${e.id}`} className="title"> <p className="title">{e.name}</p> </NavLink>
                      </div> 
                      <p className="continent">{e.continent}</p>
                  </div>  
                )}): 
                    <div className="imagen">
                        <p className="fail">Countries failed to load, please select a filter o reload the website</p>
                    </div>
                
                }
                
                </div>
            
            <div className="buttons">
            <button onClick={pages} value="previous" disabled={page===1} >Previous</button>
            <button onClick={pages} value="next" disabled={countries.length < 9  || countries.length >40} >Next</button>
            </div>  
        
        </div>
        )
    
}



export default Home;