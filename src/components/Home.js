import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div> 
                <h1> Home</h1>
                <br/>
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
                <h2>Bank of React</h2>
          
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}
