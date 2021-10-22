import React, {FormEvent, useState} from "react";
import {Row,Col,Form} from "react-bootstrap"
import AuthorNameInputField from "../authors/AuthorNameInputField";
import BookNameInputField from "../books/BookNameInputField";
import FormSubmitButton from "./FormSubmitButton";
import { FiXCircle } from "react-icons/fi";
import PriceInputField from "../books/PriceInputField";
import AuthorSelectionField from "../books/AuthorSelectionField";
import {IAuthor, IBook} from "./Types";

type DataInputFormProps = {
    formType : string
    label : string
    onCloseClick : () => void
    onCreateSubmit: (newAuthor: IAuthor, newBook: IBook) => void,
    authors: IAuthor[] | null;
}

const DataInputForm: React.FC<DataInputFormProps> = (props) => {
    const {formType, label, onCloseClick, onCreateSubmit, authors} = props;
    //Author Form State
    const [newAuthorName, setNewAuthorName] = useState<string | null>("");
    //Book Form State
    const [bookTitle, setBookTitle] = useState<string>("");
    const [bookPrice, setBookPrice] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);

    //Set input fields
    const ShowBookFormInputFields = (label: string) => {
     if(label==="Author"){
      return;
     }
     return(
         <React.Fragment>
             <PriceInputField/>
            <AuthorSelectionField authors={authors}/>
         </React.Fragment>
     );
    }

    //Handle Input Value Change
    //(1) Author Form
    const handleAddNewAuthorFieldChange = (newAuthorName: string) => {
        if(newAuthorName === "")
          {
              setNewAuthorName("");
              return;
          }
        setNewAuthorName(newAuthorName);
    }

    //Form Submit
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        //Base on label call 2 submit events
        if(label === "Author"){
            if(newAuthorName === "" || newAuthorName === null){
                setNewAuthorName("");
                return;
            }else{
                //Create Author
                const newAuthor:IAuthor = {
                    name: newAuthorName
                }
                const newBook: IBook = {
                    name: bookTitle,
                    price: bookPrice,
                    author: bookAuthor,
                };
                onCreateSubmit(newAuthor, newBook)
                setNewAuthorName("");
            }
        }
        if(label === "Book"){
            console.log("Works")
        }
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
                <Form onSubmit={handleFormSubmit}>
                    {label === "Author" ?
                        <AuthorNameInputField
                            onAddNewAuthorFieldChange={handleAddNewAuthorFieldChange}
                            currentAuthorValue={""}
                        />
                        :
                        <BookNameInputField/>}
                    {ShowBookFormInputFields(label)}
                    <FormSubmitButton editClicked={false}/>
                </Form>
            </Col>
        </Row>
    )
}

export default DataInputForm;