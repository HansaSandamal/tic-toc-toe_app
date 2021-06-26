import React, {useState} from "react";
import Game from "./Game";
import PlayerOneInput from "../components/PlayerOneInput";
import PlayerTwoInput from "../components/PlayerTwoInput";


const Home: React.FC = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    return (
        <React.Fragment>
            <div className='names'>
                <h1>{playerOne} vs {playerTwo}</h1>
                <div>
                    <h3>Player one : {playerOne} </h3>
                    <PlayerOneInput setPlayerOne={setPlayerOne}/>

                </div>
                <div>
                    <h3>Player two: {playerTwo} </h3>
                    <PlayerTwoInput setPlayerTwo={setPlayerTwo}/>
                </div>

            </div>
            <Game/>
        </React.Fragment>

    )

}
export default Home;