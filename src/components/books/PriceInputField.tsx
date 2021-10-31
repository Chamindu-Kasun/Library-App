import React, {useState, useEffect, ChangeEvent} from "react";
import { Form} from "react-bootstrap";
import NumberFormat from "react-number-format";

type PriceInputFieldProps = {
    onAddBookPriceFieldChange : (newBookPrice: string) => void;
    currentBookPriceValue : string;
    setIsFormValidate : React.Dispatch<React.SetStateAction<boolean>>
}

const PriceInputField:React.FC<PriceInputFieldProps> = (props) => {
    const [bookPrice, setBookPrice] = useState<string>("");

    //Set Current Book Price
    useEffect(() => {
        if(props.currentBookPriceValue){setBookPrice(props.currentBookPriceValue)}
    }, [props.currentBookPriceValue])

    //Handle Value Change
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            props.setIsFormValidate(true)
            setBookPrice("")
            props.onAddBookPriceFieldChange("")
            return ;
        }
        if(e.target.value){
            setBookPrice(e.target.value)
            props.onAddBookPriceFieldChange(e.target.value);
        }
        return;
    };

    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-3"}>Price</Form.Label>
            <NumberFormat className="form-control  form-input form-control-sm"
                          displayType={'input'}
                          thousandSeparator={true}
                          prefix={'Rs'}
                          onChange={handleOnInputChange}
                          value={bookPrice}
                          required/>
            <Form.Control.Feedback type='invalid'>
                <p className="text-danger fw-bold">Please Enter Book Price</p>
            </Form.Control.Feedback>
        </Form.Group>
    )
}


export default PriceInputField