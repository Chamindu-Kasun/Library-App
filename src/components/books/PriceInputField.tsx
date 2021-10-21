import React  from "react";
import { Form} from "react-bootstrap";

const PriceInputField = () => {
    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-3"}>Price</Form.Label>
            <Form.Control className={'form-input'}/>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default PriceInputField