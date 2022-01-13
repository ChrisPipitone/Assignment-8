import React, { useState } from 'react'
// import AccountBalance from "./components/AccountBalance";
import AccountBalance from './AccountBalance';
//was told to make this static

export default function Debit(props) {

    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [debits, setDebits] = useState([
        {amount: 100, name: "Food"},
        {amount: 50, name: "Gas"},
        {amount: 250, name: "Rent"}
    ]);


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(parseInt(e.target.value));
    }

    const addNewDebit = (e) => {
        e.preventDefault();
        
        const newDebits = [...debits];
        newDebits.push({amount, name});
        setDebits(newDebits);
    }

    return (
        <div className="Debit">
            <h1> Debit</h1>

            <div className="accoutBalance">
                <AccountBalance accountBalance={props.accountBalance}/>
            </div>
            

            {
                debits.map((debit, key) => {
                    return(
                        <div key={key}>
                            {debit.name} :: {debit.amount}
                        </div>
                    );
                })
            }
            <form onSubmit={addNewDebit}>
                <input onChange={onChangeName} type="text" placeholder="name" required/>
                <input onChange={onChangeAmount} type="number" placeholder="amount" required/>
                <button>Submit</button>
            </form>
        </div>
    )
}
