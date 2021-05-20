import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
