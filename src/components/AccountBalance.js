import React, { useState, useEffect }  from 'react';

function AccountBalance(props) {
    const [accountBalance, setAccountBalance] = useState(14568.27)

    //setAccountBalance(accountBalance - props.amount)

    /*
      issue deducting from account balance i think prop usage is done correctly but how 
      to 'call the function' that does the deducton is done wrong
      my guess
      when this component (i thinkk thats the proper term) is 'called' by another component 
      via <AccountBalance propName={value}/> the component is put into the dom and when that happens use 
      effect is only called once?
      my confusion lies in the 'order of operations' in how the process flows 

    */

      useEffect(() => {
        const newBalance = accountBalance - parseFloat(props.deduction);
        setAccountBalance(newBalance)

        console.log(props.deduction)
      },[])

    return (
        <div>
          Balance: {accountBalance}
        </div>
    );
  }

export default AccountBalance;