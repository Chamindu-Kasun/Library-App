import React  from "react";
import { Form} from "react-bootstrap";

const BookNameInputField = () => {
    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-5"}>Title of the book</Form.Label>
            <Form.Control className={'form-input'}/>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default BookNameInputField