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
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }
  
  // where i would put component defs, if i could get it to work with render={component}
  //const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  //and so on but idk why its not working for me 

  mockLogIn = (logInInfo) => {

    //i guess we can make these .'currentUser' and 
    //newUser.userName = logInInfo.userName
    // names be arbitrary / whatever fits best ?

    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
  //
  // <Route exact path="/login" render={LogInComponent}/>


  render(){
     return (      
      <Router>
         <div className="App">

          {/* 
          is it possible to have multiple routes to the same place? 
          also should put login route here so it doesn't have nav bar links so users cant bypass login 
            i think?
          */}

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
                  <Route exact path = "/" element = {<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>} />
                  <Route exact path = "/home" element = {<Home accountBalance={this.state.accountBalance}/>} />

                  {/* user profile */}
                  <Route exact path = "/userProfile" element = {
                      <UserProfile userName={this.state.currentUser.userName} 
                      memberSince={this.state.currentUser.memberSince}  />} 
                  />

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
