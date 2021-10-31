import React, {useState, useEffect} from "react";
import {Row} from "react-bootstrap"
import Header from "../common/Header";
import {IAuthor, IBook, IPopupMessage } from "../common/Types";
import NoDataToShow from "../common/NoDataToShow";
import AddNewData from "../common/AddNewData";
import DataInputForm from "../common/DataInputForm";
import ShowEachItem from "../common/ShowEachItem";
import NotificationMessage from "../common/NotificationMessage";

type AuthorsProps = {
    onAuthorsChange: (author: IAuthor[]) => void,
    authors: IAuthor[] | null
}

const Authors: React.FC<AuthorsProps> = (props) => {
    const {onAuthorsChange, authors} = props;
    const [showInputForm, setShowInputForm] = useState<boolean>(false)
    //Edit
    const [editClicked, setEditClicked] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
    const [authorNameToEdit, setAuthorNameToEdit] = useState<string>("");
    //Notification
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
    const [showPopupMessage, setShowPopupMessage] = useState<boolean>(false);

    //Show Authors
    const ShowAuthors = () => {
      if(!authors || authors.length === 0)return<NoDataToShow message={"authors"}/>
      if(authors){
          return(
              <ShowEachItem
                  label={"Author"}
                  itemsToShow={authors}
                  onItemEditClicked={handleOnAuthorEdit}
                  onItemDeleteClicked={handleOnAuthorDelete}
              />
          );
      }
    }

    //Handle Add New Author Form
    const handleAddAuthorClicked = () => {
        setEditClicked(false);
        setIndexToEdit(null)
        setAuthorNameToEdit("")
        setShowInputForm(true);
    }

    const handleAddAuthorFormClose = () => {
        setEditClicked(false);
        setShowInputForm(false);
        setIndexToEdit(null)
        setAuthorNameToEdit("")
    }

    const showAddAuthorForm = () => {
        if (!showInputForm) {
            return;
        }
        if (editClicked) {
            return (
                <DataInputForm
                    formType={"Update"}
                    label={"Author"}
                    onCloseClick={handleAddAuthorFormClose}
                    onCreateSubmit={handleOnCreateAuthorSubmit}
                    authors={authors}
                    authorToEdit={authorNameToEdit}
                    bookToEdit={null}
                    editClicked={editClicked}
                />
            );
        }
            return < DataInputForm
                    formType = {"Create"}
                    label = {"Author"}
                    onCloseClick = {handleAddAuthorFormClose}
                    onCreateSubmit = {handleOnCreateAuthorSubmit}
                    authors = {authors}
                    authorToEdit = {authorNameToEdit}
                    bookToEdit = {null}
                    editClicked={editClicked}
                />
    }

    //Handle create author submit
    const handleOnCreateAuthorSubmit = (newAuthor: IAuthor, newBook:IBook) => {
        const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
        if (indexToEdit === null) {
            newAuthorList.push(newAuthor);
            onAuthorsChange(newAuthorList);
            setPopupMessage({message: "Author added Successfully", className: "alert-success"});
            setShowPopupMessage(true);
            setShowInputForm(false);
            return;
        }
        newAuthorList.splice(indexToEdit, 1, newAuthor);
        onAuthorsChange(newAuthorList);
        setAuthorNameToEdit("")
        setIndexToEdit(null)
        setPopupMessage({message: "Author Edited Successfully", className: "alert-warning"});
        setShowPopupMessage(true);
        setShowInputForm(false);
        return;
    }

    //Handle Author Delete
    const handleOnAuthorDelete = (index: number) => {
        if (!authors) {
            return;
        }
        const newAuthorList: IAuthor[] = authors.slice();
        newAuthorList.splice(index, 1);
        onAuthorsChange(newAuthorList);
        setPopupMessage({message: " Author Deleted Successfully", className: "alert-danger"});
        setShowPopupMessage(true);
    }

    //Handle Author Edit
    const handleOnAuthorEdit = (index: number) => {
        setEditClicked(true);
        setShowInputForm(true)
        setIndexToEdit(index)
    }

    //Set Author To Edit
    useEffect(() => {
        if(indexToEdit === null || !authors || !authors[indexToEdit]) return;
        setAuthorNameToEdit(authors[indexToEdit].name)
    },[authors, indexToEdit])

    return(
        <Row className={"ms-lg-3 ms-md-3 me-md-2"}>
            <Header header={"Authors"}/>
            {ShowAuthors()}
            <NotificationMessage message={popupMessage} showPopUp={showPopupMessage}/>
            <AddNewData field={"Author"} onAddClick={handleAddAuthorClicked}/>
            {showAddAuthorForm()}
        </Row>
    )
};
export default Authors;