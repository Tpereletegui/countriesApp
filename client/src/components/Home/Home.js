import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import {getCountries, getCountriesOrder} from "../../redux/actions"; 



function Home() {
    
    

    let countries= useSelector (state => 
        {   
         return   state.countries
        })


    
    const dispatch= useDispatch();
     
    const [page, setPage] = useState(1);
    const [order, setOrder] =useState("")
    
    
       useEffect(()=> {
        dispatch(getCountries(1))
    }, [dispatch]);  
     
     function handleChange(e){
     if(e.target.value==="all") dispatch(getCountries(1));
     else {
         setOrder(e.target.value);
         setPage(1);
         dispatch(getCountriesOrder(e.target.value, 1))
    }
     
       
    } 
    console.log(order);
    
   

     function pages(e) {
        if(e.target.value==="next"){
            dispatch(getCountriesOrder(order, page + 1));
            setPage(page + 1);
        }
        else {
            dispatch(getCountriesOrder(order, page - 1));
            setPage(page - 1);
        }
    } 
    console.log(page);
    

    return (
        
        <div>
             <Nav/> 
        
            <label>Filtrar</label>
            <select  onChange={handleChange} >
                
                <option value="all">All</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="larger">Population: Largest</option>
                <option value="smaller">Population: Smallest</option>
                
            </select>
            
        
            

            {
            countries.length?
            countries.map((e, i)=>{
                
                return (
                    <div key={i}>
                      <img width="100px" src={e.image} alt="" />
                      <Link to={`/detail/${e.id}`}><p>{e.name}</p></Link> 
                      <p>{e.continent}</p>
                  </div>  
                )
            }): <p>no gordito</p>}
            

            <button onClick={pages} value="previous" disabled={page===1}>Previous</button>
            <button onClick={pages} value="next" disabled={countries.length<10}>Next</button>

            
        </div>


    )
      

   
}



export default Home;