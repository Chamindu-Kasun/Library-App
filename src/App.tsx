import React from 'react';
import "./assets/styles/main.scss";
import {Container,Row,Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import LibraryBody from "./components/LibraryBody";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return(
      <Container fluid={true}>
          <Row>
             <Col xs={12}><Welcome/></Col>
              <Col xs={12}><LibraryBody/></Col>
              <Col xs={12}><Footer/></Col>
          </Row>
      </Container>
  )
};

export default App;
