import React, { useState, useEffect }  from 'react';

function AccountBalance(props) {
    const [accountBalance, setAccountBalance] = useState(14568.27)

      useEffect(() => {
        const newBalance = accountBalance - parseFloat(props.deduction);
        setAccountBalance(newBalance)

        // console.log("deduction:: " +props.deduction)
        
      },[props])


    // setAccountBalance(accountBalance - props)

    return (
        <div>
          Balance: {accountBalance}
        </div>
    );
  }

export default AccountBalance;