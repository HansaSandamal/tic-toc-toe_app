import React, {useState} from "react";

type PlayerOneInputProps={
    setPlayerOne:(value:string)=>void;
}

const PlayerOneInput:React.FC<PlayerOneInputProps>=(props)=>{
    const {setPlayerOne}=props;
    const [playerOne,setNewPlayerOne]=useState('');
    const handleClick=()=>{
        setPlayerOne(playerOne);
        setNewPlayerOne("");
    }
    return(
        <div >
            <input type="text" value={playerOne} onChange={e=>setNewPlayerOne(e.target.value)} placeholder={"Player One Name"}/>
            <button onClick={handleClick}>OK</button>
        </div>
    )
}
export default PlayerOneInput;