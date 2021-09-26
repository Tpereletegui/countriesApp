import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage.js";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";
import Activities from './components/Activities/Activities';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/detail" component={Details} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Form} />
      <Route path="/activities" component={Activities}/>
    </div>
  )
}

export default App;
