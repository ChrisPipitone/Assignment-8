import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import ErrorPage from "./components/ErrorPage";
import AccountBalance from "./components/AccountBalance";

function App () {

  const [accountBalance, setAccountBalance] = useState(14568.27)
  const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })


  const mockLogin = (logInInfo) => {
    const newUser = {...currentUser}
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
  }


    return (      
    <BrowserRouter>
        <div className="App">

        {/* 
        is it possible to have multiple routes to the same place? 
        also should put login route here so it doesn't have nav bar links so users cant bypass login 
          i think?
        */}

          <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Bank of React</Navbar.Brand>
            <div className="row">
              <div className="col">
                <Link to ="/login">Login</Link> <br/>
              </div>
              <div className="col">
                  <Link to ="/">Home</Link> <br/>
              </div>  
              <div className="col">
                  <Link to = "/userProfile">User Profile</Link> <br/>
               </div>
               <div className="col">
                  <Link to = "/accountBalance">Account Balance</Link> <br/>
               </div>
               <div className="col">
                  <Link to ="/debit">Debit</Link> <br/>
               </div>
            </div>
          </Navbar>

          <Routes>
          <Route path="/login" element={<Login user={currentUser} mockLogIn={mockLogin}/>}/>
          <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
          <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
          <Route path="/debit" element={<Debit accountBalance={accountBalance}/>} />

          {/* error page */}
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
