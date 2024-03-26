// Calculator.js
import React, { useState } from 'react';
import './calc.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (value) => {
    if (error) {
      setDisplay('');
      setError(false);
    }

    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
      setError(true);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setError(false);
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly className="display" data-testid='display_test_id'/>
      {error && <div className="error">Error</div>}
      <div className="buttons">
      <button className="number" onClick={() => handleClick('7')}>7</button>
        <button className="number" onClick={() => handleClick('8')}>8</button>
        <button className="number" onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('*')}>×</button>
        <button className="number" onClick={() => handleClick('4')}>4</button>
        <button className="number" onClick={() => handleClick('5')}>5</button>
        <button className="number" onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="number" onClick={() => handleClick('1')}>1</button>
        <button className="number" onClick={() => handleClick('2')}>2</button>
        <button className="number" onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="number" onClick={() => handleClick('0')}>0</button>
        <button className="decimal" onClick={() => handleClick('.')}>.</button>
        <button className="equal" onClick={() => calculateResult()}>=</button>
        <button className="operator" onClick={() => handleClick('/')}>÷</button>
        <br />
        <button className="clear" onClick={() => clearDisplay()}>C</button>
      </div>
    </div>
  );
};

export default Calculator;