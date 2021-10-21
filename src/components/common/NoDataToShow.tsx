import React from "react";
import {Row, Col} from "react-bootstrap";

type NoDataToShowProps = {
    message:string;
}

const NoDataToShow : React.FC<NoDataToShowProps> = (props) => {
    return(
    <Row xs={12}>
        <Col className={"no-data px-0"}>
            No {props.message} listed here
        </Col>
    </Row>
    );
}

export default NoDataToShow