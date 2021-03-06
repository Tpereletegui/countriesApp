import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import { getActivities, getCountries} from "../../redux/actions";
import { Link } from "react-router-dom";
import "./activities.css";
import Fondo from "../../fondo.png";
import Boton from "../Button/Button.js";


export default function Activities () {


    const dispatch= useDispatch();
    let activities = useSelector(state => state.activities);
    


     useEffect(() => {
        window.scrollTo(0, 0)
    dispatch(getActivities("all"));
        
    }, [dispatch]); 

    async function handleSelect(e){
        e.preventDefault();
        /* setOrder(e.target.value); */
        
        dispatch(getActivities(e.target.value))
        
    }

    function handleSelectSeason(e) {
        e.preventDefault();
        dispatch(getActivities(e.target.value))
    }



    return (
        <div className="activities_container">
            {console.log(activities)}
            <Nav className="nav_bar"/>
            <div className="activities_filters">
            
            <label>Difficulty</label>
            <select onChange={handleSelect}  className="activities_select">
                
                <option value="-">-</option>
                    <option value="all">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                <label>Season</label> 
            <select onChange={handleSelectSeason} className="activities_select">
                
                    <option value="-">-</option>
                    <option value="all">All</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value="Winter">Winter</option>
                    <option value="Autumn">Autumn</option>   
                    
            </select>'
                       
            </div>
            <div className="activities_cards">
            {
                activities.length?
                
                activities.map((e, i)=>{
                    return (
                        
                    <div key={i} className="activities_card">
                      <h3 className="activities_title">{e.name}</h3>
                      <img className="image" src={Fondo} alt="" />
                      <p className="activities_name"> Difficulty (1 to 5): {e.difficulty}</p>
                      <p className="activities_name"><u>Days:</u> {e.duration}</p>
                      <p className="activities_season">{e.season}</p>
                       <h4 className="activities_countries">Countries: </h4> {e.countries ? e.countries.map(x=>
                      <Link to={`/detail/${x.id}`} className="activities_link"> <p className="activities_country">-{x.name}</p></Link> ): <p>No countries added</p>}
                    </div>
                )}): <p className="fail">There are not tourist activities registered</p>
            
            }
            </div>
            <div className="add-new">
             <Link to='/create'><Boton style={{backgroundColor: '#00ADB5', color: '#000000', marginLeft: '15px', textDecoration: 'none', marginBottom: '40px;'}} name="Add"> </Boton></Link>
            </div>
        </div>
    )
 }


