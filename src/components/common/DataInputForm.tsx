import React from "react";
import {Row,Col,Form} from "react-bootstrap"
import AuthorNameInputField from "../authors/AuthorNameInputField";
import BookNameInputField from "../books/BookNameInputField";
import FormSubmitButton from "./FormSubmitButton";
import { FiXCircle } from "react-icons/fi";
import PriceInputField from "../books/PriceInputField";
import AuthorSelectionField from "../books/AuthorSelectionField";

type DataInputFormProps = {
    formType : string
    label : string
    onCloseClick : () => void
}

const DataInputForm: React.FC<DataInputFormProps> = (props) => {
    const {formType, label, onCloseClick} = props;

    //Set input fields
    const ShowBookFormInputFields = (label: string) => {
     if(label==="Author"){
      return;
     }
     return(
         <React.Fragment>
             <PriceInputField/>
            <AuthorSelectionField/>
         </React.Fragment>
     );
    }

    return (
        <Row className="form mt-5 px-0">
            <Col xs={12} lg={8} md={12}>
                <Row>
                    <Col lg={9} xs={8}><span className="form-title">{formType} {label}</span></Col>
                    <Col lg={3} xs={4}>
                        <FiXCircle
                        size={28}
                        className="close-button pt-1 float-end"
                        onClick={() => onCloseClick()}
                        />
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={8} md={12}>
                <Form>
                    {label === "Author" ? <AuthorNameInputField/> : <BookNameInputField/>}
                    {ShowBookFormInputFields(label)}
                    <FormSubmitButton editClicked={false}/>
                </Form>
            </Col>
        </Row>
    )
}

export default DataInputForm;