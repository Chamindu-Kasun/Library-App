import React from "react"
import {Col} from "react-bootstrap";

type HeaderProps = {
    header:string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return(
        <Col xs={12} lg={11} className={"border-bottom border-2 border-dark pb-1 px-0 mb-4"}>
        <h2>{props.header}</h2>
        </Col>
    )
}
export default Header;