import React, {useState} from "react";
import {Row} from "react-bootstrap"
import Header from "../common/Header";
import {IAuthor} from "../common/Types";
import {IBook} from "../common/Types";
import NoDataToShow from "../common/NoDataToShow";
import AddNewData from "../common/AddNewData";
import DataInputForm from "../common/DataInputForm";
import ShowEachItem from "../common/ShowEachItem";

type BooksProps = {
    authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;
    const [books, setBooks] = useState<IBook[] | null>(null)
    const [showInputForm, setShowInputForm] = useState<boolean>(false)

    //Show Books
    const ShowBooks = () => {
        if(!books || books.length === 0)return<NoDataToShow message={"books"}/>
        if(books){
            return(
                <ShowEachItem label={"Books"} itemsToShow={books}/>
            );
        }
    }

    //Handle Add New Book Form
    const handleAddBookClicked = () => {
        setShowInputForm(true);
    }

    const handleAddBookFormClose = () => {
        setShowInputForm(false);
    }

    const showAddBookForm = () => {
        if(!showInputForm) {
            return;
        }
        return <DataInputForm
            formType = {"Create"}
            label = {"Book"}
            onCloseClick = {handleAddBookFormClose}
            onCreateSubmit = {handleOnCreateBookSubmit}
            authors={authors}
        />
    }

    //Handle create Book submit
    const handleOnCreateBookSubmit = (newAuthor: IAuthor, newBook:IBook) => {
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.push(newBook);
        setBooks(newBookList);
    }

    return(
        <Row className={"books ms-lg-3 mx-md-3"}>
            <Header header={"Books"}/>
            {ShowBooks()}
            <AddNewData field={"Book"} onAddClick={handleAddBookClicked}/>
            {showAddBookForm()}
        </Row>
    )
}
export default Books;