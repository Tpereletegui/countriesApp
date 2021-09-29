import React from "react";
import {NavLink} from "react-router-dom";
import "./landingPge.css"


function LandingPage() {

	return (
		<div className="main">
			<div className="boton">
			 <NavLink to="/home" className="link"> <button className="enter">Explore</button> </NavLink> 
			</div>
		 </div> 
		
		)
};


export default LandingPage;