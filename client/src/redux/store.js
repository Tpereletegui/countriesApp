import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk" ;
import reducer from "./reducer";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";




const store= createStore(
	reducer, composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;