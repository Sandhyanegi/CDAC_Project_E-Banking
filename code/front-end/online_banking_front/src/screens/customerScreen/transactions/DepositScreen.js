import React, { useState } from 'react';

function DepositForm() {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the deposit amount, such as send it to a backend API
  };

  return (
    <>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
      <label>
        Deposit amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <button type="submit">Deposit</button>
    </form>
    </>
  );
}

export default DepositForm;

