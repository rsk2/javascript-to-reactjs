import React from 'react';
import './App.css';
import CounterJS from './components/CounterJS';
import CounterReactJS from './components/CounterReactJS';
import WindowSizeJS from './components/WindowSizeJS';
import WindowSizeReactJS from './components/WindowSizeReactJS';
import HelloNameReactJS from './components/HelloNameReactJS';
import HelloNameJS from './components/HelloNameJS';

function App() {
  return (
    <div>
      <h3>Counter in React class component:</h3>
      <CounterReactJS />
      <br/>
      <h3>Counter in vanilla JavaScript in React functional component:</h3>
      <CounterJS />
      <br/>
      <h3>Window size in React class component:</h3> 
      <WindowSizeReactJS />
      <br/>
      <h3>Window size in vanilla JavaScript in React functional component:</h3> 
      <WindowSizeJS />
      <br/>
      <h3>Hello Name in React class component:</h3> 
      <HelloNameReactJS />
      <br/>
      <h3>Hello Name in vanilla JavaScript in React functional component:</h3> 
      <HelloNameJS />
    </div>
  );
}

export default App;
