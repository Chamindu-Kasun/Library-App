import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import LibraryBody from "./components/LibraryBody";

const LibraryApp: React.FC = () => {
    return(
        <Container fluid={true}>
            <Row className={"mb-5"}>
                <Col xs={12} className={"mb-5"}><Welcome/></Col>
                <Col xs={12} className={"mb-5"}><LibraryBody/></Col>
            </Row>
        </Container>
    )
};

export default LibraryApp;