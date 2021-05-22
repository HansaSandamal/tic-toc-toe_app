import React, {useState} from "react";

const Home: React.FC = () => {
    const [inputVal, setInputVal]= useState("The value of input");
    return (
        <React.Fragment>
            <h1>Home</h1>
            <input type="text" placeholder="enter your name"
                   onChange={e => setInputVal(e.target.value)}/>
            <label>{inputVal}</label>
        </React.Fragment>

)

}
export default Home;