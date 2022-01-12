import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credit from "./components/Credit";
import Debit from "./components/Debit";

class App extends Component{
  render(){
     return (
       
      <Router>
         <div className="App">
           <Navbar bg="dark" variant="dark">
           <Navbar.Brand>Bank of React</Navbar.Brand>

             <div className="content">
               <Routes>
                 <Route exact path = "/" element = {<Home />} />
                 <Route exact path = "/userProfile" element = {<UserProfile />} />
                 <Route exact path = "/Login" element = {<Login />} />
               </Routes>

             </div>
             
           </Navbar>
         </div>
      </Router>
     
    );
  }
}

export default App;
