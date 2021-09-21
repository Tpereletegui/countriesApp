import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { NavLink} from "react-router-dom";
import { getCountries, searchCountries } from "../../redux/actions";



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
		<div>
		<NavLink to="/home"> Home </NavLink>
		<NavLink to="/create"> Crear Actividad </NavLink>
		<input type="text" placeholder="Search Your Country" onChange={handleInput}  value={input} />
		<button onClick={buscar}>Buscar</button>
		 </div>
		

	)
}


export default Nav;
