import React from 'react';
import './App.css';
import CounterJS from './components/CounterJS';
import CounterReactJS from './components/CounterReactJS';

function App() {
  return (
    <div>
      <CounterReactJS/>
      <br/>
      <CounterJS/>
    </div>
  );
}

export default App;
