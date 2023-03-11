import React, { useState } from 'react';

function WithdrawForm() {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit withdrawal request goes here
  }

  return (
    <>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <button type="submit">Withdraw</button>
    </form>
    </>
  );
}

export default WithdrawForm;
