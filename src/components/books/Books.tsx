import React, {useState} from "react";
import {Row} from "react-bootstrap"
import Header from "../common/Header";
import {IAuthor} from "../common/Types";
import {IBook} from "../common/Types";
import NoDataToShow from "../common/NoDataToShow";
import AddNewData from "../common/AddNewData";
import DataInputForm from "../common/DataInputForm";

type BooksProps = {
    authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;
    const [books, setBooks] = useState<IBook[] | null>(null)
    const [showInputForm, setShowInputForm] = useState<boolean>(false)

    //Show Books
    const ShowBooks = () => {
        if(!books)return<NoDataToShow message={"books"}/>
        // <ShowData/>
        //   return<h1>AuthorsABC</h1>
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

    //Handle create author submit
    const handleOnCreateBookSubmit = (newAuthor: IAuthor) => {
        // const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
        // newAuthorList.push(newAuthor);
        // setAuthors(newAuthorList);
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