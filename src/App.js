
import { useState , useEffect} from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount);
    // setAmount(convertedAmount);
  };

  useEffect(() => {
      setConvertedAmount(amount * currencyInfo[to]);
    
  }, [amount, swap]);

  return (
    <div className="app-container">
      <h1 className='app-title'>Currency Conveter</h1>
      <div className='inputbox'>
      <div className="input-box-container">
        <InputBox
          label="This much"
          amount={amount}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          amountDisable = {false}

        />
      </div>

      <div className="input-box-container">
        <InputBox
          label="Is equal to"
          amount={convertedAmount}
          currencyOptions={options}
          onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisable = {true}
          className='disabled'
        />
      </div>
      </div>
      

      <div className="swap-button-container">
        <button onClick={swap} className="swap-button">
          Swap Currency
        </button>
      </div>1      
      
    </div>
  );
}

export default App;
