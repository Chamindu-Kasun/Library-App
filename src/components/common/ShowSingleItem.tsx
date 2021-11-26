import React, {useState} from "react"
import {IAuthor, IBook} from "./Types";
import {Row,Col} from "react-bootstrap";
import {FiEdit, FiTrash2} from "react-icons/fi";
import {IconContext} from "react-icons";
import ShowDeleteConfirmMessage from "./ShowDeleteConfirmMessage";

type ShowSingleItemProps = {
    label:string;
    item: IAuthor | IBook
    index: number
    onItemEditClicked : (index: number) => void;
    onItemDeleteClicked : (index: number) => void;
}

const ShowSingleItem:React.FC<ShowSingleItemProps> = (props) => {
    const{label,item,index,onItemEditClicked,onItemDeleteClicked}=props;
    const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);

    //Show Delete Confirm
    const handleDeleteConfirmShow = () => {
        setDeleteConfirm(true);
    }
    const handleDeleteConfirmClose = () => {
        setDeleteConfirm(false);
    }

    return(
        <React.Fragment>
            <Row xs={12} className={"item d-flex justify-content-center"}>
                <Col xs={8} md={8} ><h5 className={"ps-0 pt-1"}>{index+1}. {item.name}</h5></Col>
                <Col xs={4} md={4} className={"text-end pe-0"}>
                    <IconContext.Provider value={{size: "1em"}}>
                        <FiEdit
                        className={"icons text-warning me-4"}
                        onClick={() => onItemEditClicked(index)}
                        />
                        <FiTrash2
                        className={"icons text-danger"}
                        onClick={handleDeleteConfirmShow}
                        />
                    </IconContext.Provider>
                </Col>
            </Row>
            {deleteConfirm &&
               <ShowDeleteConfirmMessage
                   showPopUpMessage={deleteConfirm}
                   label={label}
                   index = {index}
                   onItemDeleteConfirm = {onItemDeleteClicked}
                   onItemDeleteClose = {handleDeleteConfirmClose}
               />
            }
        </React.Fragment>
    )
}

export default ShowSingleItem;