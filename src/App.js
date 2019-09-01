import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">

  <Router>
        <Route exact path="/" component={Home}/>

      </Router>




    </div>
  );
}

export default App;
