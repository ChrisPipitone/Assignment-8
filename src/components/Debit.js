import React, { useState } from 'react'

//was told to make this static


export default function Debit() {

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
                <input onChange={onChangeName} type="text" placeholder="name" />
                <input onChange={onChangeAmount} type="number" placeholder="amount" />
                <button>Submit</button>
            </form>
        </div>
    )
}
