import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import { getActivities} from "../../redux/actions";


export default function Activities () {


    const dispatch= useDispatch();
    let activities = useSelector(state => state.activities);
    const [order, setOrder] =useState("-");


    /* useEffect(() => {
    dispatch(getActivities(order));
        
    }, [dispatch]); */

    async function handleSelect(e){
        e.preventDefault();
        /* setOrder(e.target.value); */
        dispatch(getActivities(e.target.value))

    }



    return (
        <div>
            {console.log(activities)}
            <Nav />
            <label>Filters</label>
            <select onChange={handleSelect} >
                
                <label>Difficulty</label>
                <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    <select onChange={handleSelect}>
                <label>Season</label> 
                
                    <option value="">-</option>
                    <option value="summer">Summer</option>
                    <option value="spring">Spring</option>
                    <option value="winter">Winter</option>
                    <option value="autumn">Autumn</option>   
                    
            </select>
            {
                activities.length?
                
                activities.map((e, i)=>{
                    return (
                        
                    <div key={i}>
                      <h3>{e.name}</h3>
                      <p>Difficulty (1 to 5): {e.difficulty}</p>
                      <p>Duration (days): {e.duration}</p>
                      <p>Season: {e.season}</p>
                       <h4>Countries:  { e.countries.map(x=>
                      <p>-{x.name}</p> ) }</h4>
                    </div>
                )}): <p>There are not tourist activities registered</p>
            
            }
        </div>
    )
 }


