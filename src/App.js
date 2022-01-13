import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import ErrorPage from "./components/ErrorPage";
import AccountBalance from "./components/AccountBalance";

class App extends Component{

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
     
    }
  }
  
  render(){
     return (      
      <Router>
         <div className="App">
           <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Bank of React</Navbar.Brand>
              <ul className="">
                  <Link to ="/">Login</Link> <br/>
                  <Link to ="/home">Home</Link> <br/>
                  <Link to = "/userProfile">User Profile</Link> <br/>
                  <Link to = "/accountBalance">Account Balance</Link> <br/>
              </ul>
           </Navbar>

             <div className="content">
               <Routes>
                  <Route exact path = "/" element = {<Login />} />
                  <Route exact path = "/home" element = {<Home accountBalance={this.state.accountBalance}/>} />
                  <Route exact path = "/userProfile" element = {<UserProfile />} />
                  <Route exact path = "*" element = {<ErrorPage />} />
                  <Route exact path = "/accountBalance" element = {<AccountBalance />} />
                  {/* <Route exact path = "/home" element = {<Home />} />
                  <Route exact path = "/userProfile" element = {<UserProfile />} /> */}
               </Routes>
             </div>
             
             <footer>
               Foooter
             </footer>
           
         </div>
      </Router>
     
    );
  }
}

export default App;
