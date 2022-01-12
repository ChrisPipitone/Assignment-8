import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div> 
                <h1> help</h1>
                
                <ul className="nav m-2 justify-content-center">
                    <Link to ="/login">Login</Link> <br/>
                    <Link to = "/userProfile">User Profile</Link> <br/>
                </ul>
                
            </div>
        )
    }
}
