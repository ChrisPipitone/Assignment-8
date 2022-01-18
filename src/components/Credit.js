import React, { useState, useEffect } from 'react'
// import AccountBalance from "./components/AccountBalance";
import AccountBalance from './AccountBalance';
import axios from 'axios'

export default function Credit() {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState([]);
    
    const getCredits = async () => {
        await axios.get("https://moj-api.herokuapp.com/credits")
        .then(res => {
            setCredits(res.data)
        })  
    }

    useEffect( () => {
        getCredits();
    }, [])
   
    const addNewCredit = (e) => {
        e.preventDefault();

        // console.log("amount check: 1 :: " + amount)
        // console.log("cost value:: " + parseFloat(e.target.cost.value))

        setAmount(parseFloat(e.target.cost.value))
        setDescription(e.target.descript.value.toString());

        const today =  new Date().toDateString();
        const newCredits = [...credits];

       
        const credit = {
            amount, description, date: today
        }

      
        newCredits.push(credit);

        setCredits(newCredits);     

    }


    //^^^ is one state behind
    return (
        <div className="Credit">
            <h1> Credits </h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Description </th>
                        <th> | Amount | </th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        credits.map((credit, key) => {
                            return(
                            <tr key={key}>
                                <td> { credit.description }</td>
                                <td> { credit.amount }</td>
                                <td> { credit.date }</td>
                            </tr> 
                            ) 
                        })
                     }
                </tbody>
            </table>
           
            <div className="accoutBalance"><br />
                <AccountBalance deduction={amount}/>
            </div>

            <form onSubmit={addNewCredit}>
                <input name="descript" type="text" placeholder="description" required/>
                <input name="cost" type="number" placeholder="amount" required/>
                <button>Add New Credit</button>
            </form>


        </div>
    )
}
