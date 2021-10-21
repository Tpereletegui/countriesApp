import React from "react";
import {NavLink} from "react-router-dom";
import "./landingPge.css";
import { Button } from "@mui/material";


function LandingPage() {

	return (
		<div className="main">
			<div className="boton">
			 <NavLink to="/home" className="link"> <Button size="large" style={{backgroundColor: '#000000', color: '#FFFFFF', marginLeft: '15px', marginTop: '40px', width:'90px', height: '35px'}} >EXPLORE </Button> </NavLink> 
			</div>
		 </div> 
		
		)
};


export default LandingPage;