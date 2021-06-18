import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Game from "./view/Game";
import Home from "./view/Home";

import './assetes/Main.scss';


function App() {
    const [title, setTitle] = useState("Tic tac toe");
  return (
    <div className="App">
       <Header />
        <Game />
        <Home />
        <Footer/>
    </div>
  );
}

export default App;
