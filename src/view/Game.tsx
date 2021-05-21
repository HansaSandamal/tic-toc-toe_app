import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Square from "../components/Square";
const Game:React.FC=()=>{
    return(
       <div className="min-vh-100">

           <Square/>

       </div>

    )
}
export default Game;