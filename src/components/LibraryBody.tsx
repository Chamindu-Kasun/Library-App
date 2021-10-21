import React, {useState} from "react";
import {Row, Col} from "react-bootstrap"
import Authors from "./authors/Authors";
import Books from "./books/Books";

const LibraryBody: React.FC = () => {

    return(
     <Row className={"mx-2 mt-4 d-flex flex-lg-row flex-md-row flex-column-reverse"}>
         <Col xs={12} lg={6} md={6}><Books/></Col>
         <Col xs={12} lg={6} md={6}><Authors/></Col>
     </Row>
    )
}

export default LibraryBody;