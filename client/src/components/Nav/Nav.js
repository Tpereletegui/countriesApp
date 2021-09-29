import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { NavLink} from "react-router-dom";
import { getCountries, searchCountries } from "../../redux/actions";
import "./nav.css";
import logo from "./map.jpg"


function Nav(){
	const [input, setInput] =useState("");
	 const dispatch = useDispatch(); 
	useEffect(()=>{
		dispatch(getCountries())
	}, [dispatch])
	//ACA METER UN USEEFFECT como componentDidMount

	const handleInput = e => {
		setInput(e.target.value)
	}
	const buscar = () => {
		dispatch(searchCountries(input))
	}

	// aca poner una funcion que handle el "buscar por nombre";
	return (


		<div className="container">
			
		<div className="searchbar">
		
		<input type="text" placeholder="Search Your Country" onChange={handleInput}  value={input} />
		<button onClick={buscar}>Search</button>
		
		</div>
		<div className="links">
		<NavLink to="/home" className="home"> Home </NavLink>
		<NavLink to="/activities" className="activities"> Activities </NavLink>
		
		</div>
		
		
		
		 </div>
		

	)
}


export default Nav;
