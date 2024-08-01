import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Quote from './Quote';
import Footer from './Footer';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quote />

      <Footer />
    </div>
  );
}

export default App;
