import React from "react"
import {Row, Col, ListGroup} from "react-bootstrap";
import {IAuthor, IBook} from "./Types";
import ShowSingleItem from "./ShowSingleItem";

type ShowEachItemProps = {
    label: string
    itemsToShow : IAuthor[] | IBook[] | null,
    // onItemEditClicked : (index: number) => void;
    // onItemDeleteClicked : (index: number) => void;
}
const ShowEachItem:React.FC<ShowEachItemProps> = (props) => {
    const {itemsToShow, label} = props;
    return(
        <Row>
            <Col>
                {itemsToShow && <ListGroup>
                    {itemsToShow.map((item: IAuthor | IBook, index) => {
                        return(
                            <ListGroup.Item key={index}>
                                <ShowSingleItem label={label}/>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>}
            </Col>
        </Row>
    );
}

export default ShowEachItem;