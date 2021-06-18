import React, {useState} from "react";
import './Square';
import {Container,Col,Row} from "react-bootstrap";
import Square from "./Square";
import Swal from 'sweetalert2';
type BoardProps = {
    isChanceOfX: boolean;
    setIsChanceOfX: (value: boolean) => void;

}

const Board:React.FC<BoardProps>=(props)=>{
    const {isChanceOfX, setIsChanceOfX} = props;
    const [isAnyOneWon, setIsAnyOneWon] = useState(false);
    const [squares9, setSquare9] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);


    const setValue = (index: number) => {
        let temSquare9 = squares9;
        temSquare9[index] = isChanceOfX ? "X" : "O";
        setSquare9(temSquare9);
        console.log(squares9[0]);

        const winner = calculateWinner(squares9);
        console.log(typeof winner);
        if (winner === "O" || winner === "X") {

            // Ask to make new game with clean board.
            if(isAnyOneWon){
                Swal.fire({
                    title: 'Do you need next chance?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: `Yes`,
                    denyButtonText: `No`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire('New game created', '', 'success');
                        setIsAnyOneWon(false);
                        setSquare9([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

                    }
                })
            } else {
                setIsAnyOneWon(true);
                Swal.fire(winner === "X" ? "Player 1 has won" : "Player 2 has won");
            }

        }

    }
    function calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const render9Blocks = () => {
        return squares9.map((value: string, index: number) =>
            <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX} setValue={() => setValue(index)}
                    value={value}/>)
    }
    return(
            <Container className="m-auto">
                {/*<Row>*/}
                {/*    <Col xs={12}>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={12}>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={12}>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <div style={{maxWidth: '300px'}}>
                    {
                        render9Blocks()
                    }
                </div>
               
            </Container>


    )
}
export default Board;