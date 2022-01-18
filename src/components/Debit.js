import React, { useState, useEffect } from 'react'
// import AccountBalance from "./components/AccountBalance";
import AccountBalance from './AccountBalance';
import axios from 'axios'

export default function Debit() {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [debits, setDebits] = useState([]);
    
    const getDebits = async () => {
        await axios.get("https://moj-api.herokuapp.com/debits")
        .then(res => {
            setDebits(res.data)
        })  
    }

    useEffect( () => {
        getDebits();
    }, [])
   

    // const onChangeDescription = (e) => {
    //     e.preventDefault();
    //     setDescription(e.target.value);
    // }

    // const onChangeAmount = (e) => {
    //     setAmount(parseInt(e.target.value));
    // }

    const addNewDebit = (e) => {
        e.preventDefault();

        // console.log("amount check: 1 :: " + amount)
        // console.log("cost value:: " + parseFloat(e.target.cost.value))

        setAmount(parseFloat(e.target.cost.value))
        setDescription(e.target.descript.value.toString());

        const today =  new Date().toDateString();
        const newDebits = [...debits];

       
        const debit = {
            amount, description, date: today
        }

        // console.log("amount check: 2 ::  " + amount)
        newDebits.push(debit);

        setDebits(newDebits);     

        // console.log(newDebits);
    }


    //^^^ is one state behind
    return (
        <div className="Debit">
            <h1> Debit</h1>
            
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
                        debits.map((debit, key) => {
                            return(
                            <tr key={key}>
                                <td> { debit.description }</td>
                                <td> { debit.amount }</td>
                                <td> { debit.date }</td>
                            </tr> 
                            ) 
                        })
                     }
                </tbody>
            </table>
           
            <div className="accoutBalance"><br />
                <AccountBalance deduction={amount}/>
            </div>

            <form onSubmit={addNewDebit}>
                <input name="descript" type="text" placeholder="description" required/>
                <input name="cost" type="number" placeholder="amount" required/>
                <button>Add New Debit</button>
            </form>


        </div>
    )
}
