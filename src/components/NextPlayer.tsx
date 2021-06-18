import React from "react";
import {Alert} from "react-bootstrap";

type NextPlayerProps = {
    isChanceOfX: boolean;
}

const NextPlayer: React.FC<NextPlayerProps> = (props) => {
    return (
        <Alert variant={props.isChanceOfX?'warning' : 'info'} style={{maxWidth: '300px'}} className="m-auto">
            {props.isChanceOfX? "Player 1": "Player 2"}     {/* Ternary operation = if else*/}
        </Alert>
    )
}
export default NextPlayer;