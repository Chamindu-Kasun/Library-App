import React from "react"
import {Row, Col, ListGroup} from "react-bootstrap";
import {IAuthor, IBook} from "./Types";
import ShowSingleItem from "./ShowSingleItem";

type ShowEachItemProps = {
    label: string
    itemsToShow : IAuthor[] | IBook[] | null,
    onItemEditClicked : (index: number) => void;
    onItemDeleteClicked : (index: number) => void;
}
const ShowEachItem:React.FC<ShowEachItemProps> = (props) => {
    const {itemsToShow, label, onItemEditClicked, onItemDeleteClicked} = props;
    return(
        <Row className={"pe-0 me-0 my-0"}>
            <Col xs={12} lg={11} className={"ps-0"}>
                {itemsToShow && <ListGroup>
                    {itemsToShow.map((item: IAuthor | IBook, index) => {
                        return(
                            <ListGroup.Item
                                className={"border-0"}
                                key={index}
                            >
                                <ShowSingleItem
                                    label={label}
                                    item = {item}
                                    index={index}
                                    onItemEditClicked={onItemEditClicked}
                                    onItemDeleteClicked={onItemDeleteClicked}
                                />
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>}
            </Col>
        </Row>
    );
}

export default ShowEachItem;