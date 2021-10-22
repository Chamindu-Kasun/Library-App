import React  from "react";
import {Button} from "react-bootstrap";

type FormSubmitButtonProps = {
    editClicked: boolean
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = (props) => {
    return(
        <Button className={"form-button mt-4 px-4 float-end" } type="submit">
            {props.editClicked ? "Update" : "Create"}
        </Button>
    )
}


export default FormSubmitButton