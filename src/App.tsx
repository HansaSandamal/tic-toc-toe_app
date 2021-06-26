import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./view/Home";

import './assetes/Main.scss';


function App() {

  return (
    <div className="App">
       <Header />

        <Home />
        <Footer/>
    </div>
  );
}

export default App;
