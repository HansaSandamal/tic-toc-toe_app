import React, {useState} from "react";


import Board from "../components/Board";
import NextPlayer from "../components/NextPlayer";


const Game:React.FC=()=>{
    const [isChanceOfX, setIsChanceOfX] = useState(true);
    return(
       <div className="min-vh-100">

           <Board isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX} />
           <NextPlayer isChanceOfX={isChanceOfX}/>
       </div>

    )
}
export default Game;