import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes />
    </>
  );
}

export default App;
