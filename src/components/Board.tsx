import React from "react";
import './Square';
import {Container,Col,Row} from "react-bootstrap";
import Square from "./Square";

const Board:React.FC=()=>{
    return(
       <Container className="m-auto">
           <Row>
               <Col xs={12}>
                   <Square/>
                   <Square/>
                   <Square/>
              </Col>
               <Col xs={12}>
                   <Square/>
                   <Square/>
                   <Square/>
               </Col>
               <Col xs={12}>
                   <Square/>
                   <Square/>
                   <Square/>
               </Col>
           </Row>
       </Container>
    )
}
export default Board;