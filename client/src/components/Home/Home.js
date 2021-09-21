import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";
import {getCountries, sortCountries} from "../../redux/actions"; 


function Home() {
    let countries= useSelector (state => 
        {   
         return   state.countries
        })
    console.log(countries);
    const dispatch= useDispatch();
    const history = useHistory(); 
    const [page, setPage] = useState(1);
    
    
     useEffect(()=> {
        dispatch(getCountries(1))
    }, [dispatch]); 

     function handleChange(e){
        

     if(e.target.value==="default") dispatch(getCountries(1));
     else sorted(e.target.value);
       
    } 

    function sorted(order) {
        if( order ==="asc") return countries =countries.sort((a, b) => a.name.localeCompare(b.name));
            if(order==="desc") return countries= countries.sort((a, b)=>b.name.localeCompare(a.name));
            if(order==="large") return countries= countries.sort((a,b)=> a.population - b.population);
            if(order==="small") return countries= countries.sort((a,b)=>b.population - a.population);
    }
    

     function pages(e) {
        if(e.target.value==="next"){
            dispatch(getCountries(page + 1));
            setPage(page + 1);
        }
        else {
            dispatch(getCountries(page - 1));
            setPage(page - 1);
        }
    } 

    

    return (
        
        <div>
            <Nav/>
            <div>

            <label>Filtrar</label>
            <select  onChange={handleChange} >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="large">Population: Largest</option>
                <option value="small">Population: Smallest</option>
                <option value="default">default</option>
            </select>
            </div>
        <div>
            {console.log(countries)}

            {countries.map((e, i)=>{
                
                return (
                    <div key={i}>
                      <img width="100px" src={e.image} alt="" />
                      <NavLink to={`/details/${e.id}`}><p>{e.name}</p></NavLink> 
                      <p>{e.continent}</p>
                  </div>  
                )
            })}
            </div>

            <button onClick={pages} value="previous" disabled={page===1}>Previous</button>
            <button onClick={pages} value="next" disabled={countries.length<10}>Next</button>

            
        </div>


    )
     
}

export default Home;