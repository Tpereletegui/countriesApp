import React from "react";
import {NavLink} from "react-router-dom"


function LandingPage() {

	return (
		<div>
		 <div>
			<h1> COUNTRIES APP  </h1>
			</div>
			<div>
			<NavLink to="/home"> Ingresá </NavLink>
			</div>
		</div>
		)
};


export default LandingPage;