import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Game from "./view/Game";



function App() {
  return (
    <div className="App">
       <Header/>
        <Game/>
        <Footer/>
    </div>
  );
}

export default App;
