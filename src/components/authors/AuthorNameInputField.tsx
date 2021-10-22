import React, {useState, useEffect, ChangeEvent}  from "react";
import { Form} from "react-bootstrap";

type AuthorNameInputFieldProps = {
    onAddNewAuthorFieldChange: (newAuthorName: string) => void;
    currentAuthorValue: string
}
const AuthorNameInputField: React.FC<AuthorNameInputFieldProps> = (props) => {
    const [authorName, setAuthorName] = useState<string>("");

    //Set Current Author Name
    useEffect(() => {
        if(props.currentAuthorValue){setAuthorName(props.currentAuthorValue)}
    }, [props.currentAuthorValue])

    //Handle Value Change
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            setAuthorName("")
            return ;
        }
        if(e.target.value){
            setAuthorName(e.target.value)
            props.onAddNewAuthorFieldChange(e.target.value);
        }
        return;
    };

    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-5"}>Name of Author</Form.Label>
            <Form.Control
                className={'form-input'}
                type="text"
                onChange={handleOnInputChange}
                value={authorName}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default AuthorNameInputField