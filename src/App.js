import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Catalog from './components/catalog/Catalog'

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
    </div>
  );
}

export default App;
