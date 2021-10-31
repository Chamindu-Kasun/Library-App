import React, {useState} from "react";
import {Row, Col} from "react-bootstrap"
import Authors from "./authors/Authors";
import Books from "./books/Books";
import {IAuthor} from "./common/Types";

const LibraryBody: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);

    const handleOnAuthorsChange = (authors: IAuthor[]) => {
        setAuthors(authors);
        console.log(authors);
    };
    return(
     <Row className={"mx-2 mt-4 d-flex flex-lg-row flex-md-row flex-column-reverse"}>
         <Col xs={12} lg={6} md={6}><Books authors={authors}/></Col>
         <Col xs={12} lg={6} md={6}>
             <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
         </Col>
     </Row>
    )
}

export default LibraryBody;