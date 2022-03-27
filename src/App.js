import './App.css';
import Quotes from './Quotes.json';
import React, { useState } from 'react';
import QuoteBox from './Components/QuoteBox';
import Button from './Components/Button';

function App() {

  const colors = ['Green', 'Red', 'Blue', 'Orange', 'Purple']
  let quoteNumber = Math.floor(Math.random() * Object.keys(Quotes.quotes).length);
  let colorNumber= Math.floor(Math.random() * colors.length)
  
  const [ quote, setQuote ] = useState(Quotes.quotes[quoteNumber]);
  const [ color, setColor ] = useState(colors[colorNumber]);

  function neon() {
    let color = Math.floor(Math.random() * 5);
    if(color === 0) {
      setColor('Green')
    }  else if(color === 1) {
      setColor('Red');
    } else if(color === 2) {
      setColor('Blue');
    } else if(color === 3) {
      setColor('Orange');
    } else if(color === 4) {
      setColor('Purple');
    }
  }

  function changeQuote(){
    quoteNumber = Math.floor(Math.random() * Object.keys(Quotes.quotes).length);
    setQuote(Quotes.quotes[quoteNumber]);
    neon();   
  }

  return (
    <div className="App">
      <div className={`card neon${color}`}>
      <QuoteBox text={quote}/> 
      <Button btnColor={color} another={changeQuote}/>    
      </div>
    </div>
  );
}

export default App;
