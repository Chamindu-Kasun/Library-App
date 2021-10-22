import React  from "react";
import { Form} from "react-bootstrap";
import NumberFormat from "react-number-format";

const PriceInputField = () => {
    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-3"}>Price</Form.Label>
            <NumberFormat className="form-control  form-input"
                          displayType={'input'}
                          thousandSeparator={true}
                          prefix={'Rs'}
                          // onChange={handleOnValueChange}
                          // value={value}
                          required/>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default PriceInputField