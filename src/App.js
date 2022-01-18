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


/*git 
 Known errors

  -account balance is NAN on home page not sure why since it appears correctly on other pages

  -credit and debit are the same except for name changes 
      both are 'one state behind' i found out that the use state hook is effectively a queue
      so when the state is updated the initial values are the ones that are added to the debit/credit table

      the account balance is only affected by the user provided value not the inial state but, it gets 
      changed each state change. so when the user inputs 100, 100 is subtracted from the balance but the inital 
      value is put into the table, then the user enters an other value, this value is again subtracted from the 
      balance and the previously entered 100 is put into the table

*/







function App () {

  
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
               <div className="col">
                  <Link to ="/credit">Credit</Link> <br/>
               </div>
            </div>
          </Navbar>

          <Routes>
          <Route path="/login" element={<Login user={currentUser} mockLogIn={mockLogin}/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
          <Route path="/debit" element={<Debit />} />
          <Route path="/credit" element={<Credit />} />

          {/* error page */}
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
