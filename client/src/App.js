import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage.js";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/detail" component={Details} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Form} />
    </div>
  )
}

export default App;
