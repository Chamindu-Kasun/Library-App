import React, {FormEvent, useState, useEffect} from "react";
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
    authorToEdit : string
    bookToEdit: IBook | null
    editClicked : boolean
}

const DataInputForm: React.FC<DataInputFormProps> = (props) => {
    const {formType, label, onCloseClick, onCreateSubmit, authors, authorToEdit,
           bookToEdit, editClicked} = props;
    //Author Form State
    const [authorName, setAuthorName] = useState<string>("");
    //Book Form State
    const [bookTitle, setBookTitle] = useState<string>("");
    const [bookPrice, setBookPrice] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    //Validation
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
    const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);

    useEffect(() => {
        if (!bookToEdit) {
            return;
        }

        if (bookToEdit){
            setBookTitle(bookToEdit.name)
            setBookPrice(bookToEdit.price)
            setBookAuthor(bookToEdit.author)
        }
    }, [bookToEdit]);

    //Set input fields
    const ShowBookFormInputFields = (label: string) => {
     if(label==="Author"){
      return;
     }
     return(
         <React.Fragment>
             <PriceInputField
                 onAddBookPriceFieldChange={handleAddBookPriceFieldChange}
                 currentBookPriceValue={bookPrice}
                 setIsFormValidate={setIsFormValidate}
             />
             <AuthorSelectionField
                  onSelectBookAuthorChange={handleSelectAuthorFieldChange}
                  authors={authors}
                  currentSelectedAuthor = {bookAuthor}
                  isValid={isSelectorValidate}
                  setIsSelectorValidate={setIsSelectorValidate}
             />
         </React.Fragment>
     );
    }

    //Handle Input Value Change
    //(1) Author Form
    const handleAddNewAuthorFieldChange = (newAuthorName: string) => {
        if(newAuthorName === "") {
            setAuthorName("")
            return;
        }
        setAuthorName(newAuthorName);
    }
    //(2) Book Form
    const handleAddBookTitleFieldChange = (newBookTitle:string) => {
        if(newBookTitle === "") {
            setBookTitle("")
            return;
        }
        setBookTitle(newBookTitle);
    }

    const handleAddBookPriceFieldChange = (newBookPrice: string) => {
        if(newBookPrice === "") {
            setBookPrice("")
            return;
        }
        setBookPrice(newBookPrice);
    }

    const handleSelectAuthorFieldChange = (option: any) => {
        if(!option) {
            setBookAuthor(null)
            return;
        }
        setBookAuthor(option.value)
    }

    //Form Submit
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        //Base on the label -> call two submit events
        if(label === "Author"){
            if(authorName === "" || authorName === null){
                setIsFormValidate(true);
                if(authorName ===null) setIsSelectorValidate(true);
                return;
            }else{
                //Create Author
                const newAuthor:IAuthor = {
                    name: authorName
                }
                const newBook: IBook = {
                    name: bookTitle,
                    price: bookPrice,
                    author: bookAuthor,
                };
                onCreateSubmit(newAuthor, newBook)
                setAuthorName("");
                return;
            }
        }
        if(label === "Book"){
            if (
                bookTitle === "" ||
                bookPrice === "" ||
                bookTitle === null ||
                bookPrice === null ||
                bookAuthor === null
            ){
                 setIsFormValidate(true);
                 if(bookAuthor===null) setIsSelectorValidate(true);
                 return;
            }else{
                //Create Book
                const newAuthor:IAuthor = {
                    name: authorName
                }
                const newBook: IBook = {
                    name: bookTitle,
                    price: bookPrice,
                    author: bookAuthor,
                };
                onCreateSubmit(newAuthor, newBook)
                setIsSelectorValidate( false)
                setBookTitle("")
                setBookPrice("")
                setBookAuthor(null)
                return;
            }
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
                <Form onSubmit={handleFormSubmit} validated={isFormValidate} noValidate>
                    {label === "Author" ?
                        <React.Fragment>
                        <AuthorNameInputField
                            onAddNewAuthorFieldChange={handleAddNewAuthorFieldChange}
                            currentAuthorValue={authorToEdit}
                            setIsFormValidate={setIsFormValidate}
                        />
                        </React.Fragment>
                        :
                        <BookNameInputField
                            onAddBookTitleFieldChange={handleAddBookTitleFieldChange}
                            currentBookTitleValue={bookTitle}
                            setIsFormValidate={setIsFormValidate}
                        />
                    }
                    {ShowBookFormInputFields(label)}
                    <FormSubmitButton editClicked={editClicked}/>
                </Form>
            </Col>
        </Row>
    )
}

export default DataInputForm;