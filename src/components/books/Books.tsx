import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap"
import Header from "../common/Header";
import {IAuthor, IBook, IPopupMessage} from "../common/Types";
import NoDataToShow from "../common/NoDataToShow";
import AddNewData from "../common/AddNewData";
import DataInputForm from "../common/DataInputForm";
import ShowEachItem from "../common/ShowEachItem";
import NotificationMessage from "../common/NotificationMessage";

type BooksProps = {
    authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;
    const [books, setBooks] = useState<IBook[] | null>(null)
    const [showInputForm, setShowInputForm] = useState<boolean>(false)
    //Edit
    const [editClicked, setEditClicked] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
    const [bookToEdit, setBookToEdit] = useState<IBook | null>(null);
    //Notification
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
    const [showPopupMessage, setShowPopupMessage] = useState<boolean>(false);

    //Show Books
    const ShowBooks = () => {
        if(!books || books.length === 0)return<NoDataToShow message={"books"}/>
        if(books){
            return(
                <ShowEachItem
                    label={"Book"}
                    itemsToShow={books}
                    onItemEditClicked={handleOnBookEdit}
                    onItemDeleteClicked={handleOnBookDelete}
                />
            );
        }
    }

    //Handle Add New Book Form
    const handleAddBookClicked = () => {
        setEditClicked(false);
        setIndexToEdit(null)
        setShowInputForm(true);
        setBookToEdit(null)
    }

    const handleAddBookFormClose = () => {
        setEditClicked(false);
        setShowInputForm(false);
    }

    const showAddBookForm = () => {
        if(!showInputForm) {
            return;
        }
        if(editClicked){
            return (
                <DataInputForm
                    formType = {"Update"}
                    label = {"Book"}
                    onCloseClick = {handleAddBookFormClose}
                    onCreateSubmit = {handleOnCreateBookSubmit}
                    authors={authors}
                    bookToEdit={bookToEdit}
                    authorToEdit={""}
                    editClicked={editClicked}
                />
            );
        }
        return <DataInputForm
                   formType = {"Create"}
                   label = {"Book"}
                   onCloseClick = {handleAddBookFormClose}
                   onCreateSubmit = {handleOnCreateBookSubmit}
                   authors={authors}
                   bookToEdit={null}
                   authorToEdit={""}
                   editClicked={editClicked}
        />
    }

    //Handle create Book submit
    const handleOnCreateBookSubmit = (newAuthor: IAuthor, newBook:IBook) => {
        const newBookList: IBook[] = books ? books.slice() : [];
        if (indexToEdit === null) {
            newBookList.push(newBook);
            setBooks(newBookList);
            setPopupMessage({message: "Book added Successfully", className: "alert-success"});
            setShowPopupMessage(true);
            setShowInputForm(false);
            return
        }
        newBookList.splice(indexToEdit, 1, newBook);
        setBooks(newBookList);
        setBookToEdit(null)
        setIndexToEdit(null)
        setPopupMessage({message: "Book Edited Successfully", className: "alert-warning"});
        setShowPopupMessage(true);
        setShowInputForm(false);
        return;
    }

    //Handle Book Delete
    const handleOnBookDelete = (index: number) => {
        console.log(index)
        if (!books) {
            return;
        }
        const newBookList: IBook[] = books.slice();
        newBookList.splice(index, 1);
        setBooks(newBookList);
        setPopupMessage({message: " Book Deleted Successfully", className: "alert-danger"});
        setShowPopupMessage(true);
    }

    //Handle Book Edit
    const handleOnBookEdit = (index: number) => {
        setEditClicked(true);
        setShowInputForm(true)
        setIndexToEdit(index)
    }

    //Set Author To Edit
    useEffect(() => {
        if(indexToEdit === null || !books || !books[indexToEdit]) return;
        setBookToEdit(books[indexToEdit])
    },[books, indexToEdit])


    return(
        <Row className={"books ms-lg-3 pe-lg-3 pe-md-3 ms-md-3"}>
            <Header header={"Books"}/>
            {ShowBooks()}
            <NotificationMessage message={popupMessage} showPopUp={showPopupMessage}/>
            <AddNewData field={"Book"} onAddClick={handleAddBookClicked}/>
            {showAddBookForm()}
        </Row>
    )
}
export default Books;