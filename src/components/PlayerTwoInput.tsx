import React, {useState} from "react";

type PlayerTwoInputProps={
    setPlayerTwo:(value:string)=>void;
}

const PlayerTwoInput:React.FC<PlayerTwoInputProps>=(props)=>{
    const {setPlayerTwo}=props;
    const [playerTwo,setNewPlayerTwo]=useState('');
    const handleClick=()=>{
        setPlayerTwo(playerTwo);
        setNewPlayerTwo("");
    }
    return(
        <div >
            <input type="text" value={playerTwo} onChange={e=>setNewPlayerTwo(e.target.value)} placeholder={"Player Two Name"}/>
            <button onClick={handleClick}>OK</button>
        </div>
    )
}
export default PlayerTwoInput;