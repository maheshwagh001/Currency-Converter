// InputBox.js

import React from 'react';
import './InputBox.css';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisable,
  className = "",
}) {
  
  return (
    <div className="input-box-container">
      <div >
        <label className="label-container">{label}</label>
      </div>
      <div className={`input-container ${className}`}>
        <input 
          type='number'
          placeholder='Enter Amount'
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(String(Number(e.target.value)))}
        />
      </div>
      <div className="select-container">
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}> {currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
