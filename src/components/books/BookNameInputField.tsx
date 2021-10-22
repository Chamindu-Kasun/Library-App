import React, {ChangeEvent, useEffect, useState} from "react";
import { Form} from "react-bootstrap";

type BookNameInputFieldProps = {
    onAddBookTitleFieldChange: (newBookTitle:string) => void
    currentBookTitleValue:string
}

const BookNameInputField: React.FC<BookNameInputFieldProps> = (props) => {
    const [bookTitle, setBookTitle] = useState<string>("");

    //Set Current Book Title
    useEffect(() => {
        if(props.currentBookTitleValue)setBookTitle(props.currentBookTitleValue);
    },[props.currentBookTitleValue])

    //Handle Value Change
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            setBookTitle("")
            return ;
        }
        if(e.target.value){
            setBookTitle(e.target.value)
            props.onAddBookTitleFieldChange(e.target.value);
        }
        return;
    };

    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-5"}>Title of the book</Form.Label>
            <Form.Control
                className={'form-input'}
                type="text"
                onChange={handleOnInputChange}
                value={bookTitle}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default BookNameInputField