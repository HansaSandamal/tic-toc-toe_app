import React from "react";

import Square from "../components/Square";
import Board from "../components/Board";
const Game:React.FC=()=>{
    return(
       <div className="min-vh-100">

           <Board/>

       </div>

    )
}
export default Game;