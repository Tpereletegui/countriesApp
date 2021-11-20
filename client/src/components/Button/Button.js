import React from "react";
import { Button } from "@mui/material";


//<Button onClick={pages} 
//value="previous" 
//disabled={page===1} 
//style={{backgroundColor: '#00ADB5', color: '#000000'}} >Previous</Button>

function Botón({name, value, disabled, onClick, className, style }) {
	return(

		<Button

			style={style ? style : {backgroundColor: '#00ADB5', color: '#000000'}}
			className={className? className :null}
			value={value? value: null}
			disabled={disabled? disabled :null}
			onClick={onClick? onClick :null}
			
			  >{name}</Button>
		
		)
};



export default Botón;