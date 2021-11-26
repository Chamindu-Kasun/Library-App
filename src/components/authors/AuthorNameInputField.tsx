import React, {ChangeEvent, useEffect, useState} from "react";
import { Form} from "react-bootstrap";

type AuthorNameInputFieldProps = {
    onAddNewAuthorFieldChange: (newAuthorName: string) => void;
    currentAuthorValue: string
    setIsFormValidate : React.Dispatch<React.SetStateAction<boolean>>
}
const AuthorNameInputField: React.FC<AuthorNameInputFieldProps> = (props) => {
    const {currentAuthorValue} = props;
    const [authorName, setAuthorName] = useState<string>("");

    //Set Current Author Name
    useEffect(() => {
        if(currentAuthorValue){setAuthorName(currentAuthorValue)}
    }, [currentAuthorValue])

    //Handle Value Change
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            props.setIsFormValidate(true)
            setAuthorName("")
            props.onAddNewAuthorFieldChange("")
            return ;
        }
        if(e.target.value){
            setAuthorName(e.target.value)
            props.onAddNewAuthorFieldChange(e.target.value);
            return;
        }
    };

    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-5"}>Name of Author</Form.Label>
            <Form.Control
                className={'form-input'}
                type="text"
                required
                size="sm"
                onChange={handleOnInputChange}
                value={authorName}
            />
            <Form.Control.Feedback type='invalid'>
                <p className="text-danger fw-bold">Please Enter Author Name</p>
            </Form.Control.Feedback>
        </Form.Group>
    )
}
export default AuthorNameInputField