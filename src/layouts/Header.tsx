import React from "react";
import {Container} from "react-bootstrap";

const Header: React.FC = () => {



    return (
        <Container fluid={true} className="p-3 h3 bg-dark text-white">
            <p>Tic Tac Toe </p>
        </Container>
    )
}
export default Header;