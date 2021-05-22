import React, {useState} from "react";
import './Square';
import {Container,Col,Row} from "react-bootstrap";
import Square from "./Square";


const Board:React.FC=()=>{
    const [isChanceOfX, setIsChanceOfX] = useState(true);

    return(
            <Container className="m-auto">
                <Row>
                    <Col xs={12}>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                    </Col>
                    <Col xs={12}>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                    </Col>
                    <Col xs={12}>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                        <Square isChanceOfX={isChanceOfX} setIsChanceOfX={setIsChanceOfX}/>
                    </Col>
                </Row>
            </Container>


    )
}
export default Board;