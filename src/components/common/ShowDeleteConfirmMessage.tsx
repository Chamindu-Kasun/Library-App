import React from "react";
import {Modal, Button} from "react-bootstrap";

type ShowDeleteConfirmMessageProps = {
    showPopUpMessage: boolean
    label: string
    index: number
    onItemDeleteClose : () => void
    onItemDeleteConfirm : (index : number) => void;
}

const ShowDeleteConfirmMessage: React.FC<ShowDeleteConfirmMessageProps> = (props) => {
    const {showPopUpMessage, label, index, onItemDeleteClose,onItemDeleteConfirm} = props;
    return(
        <Modal show={showPopUpMessage} onHide={onItemDeleteClose}>
            <Modal.Header><Modal.Title>Delete {label}</Modal.Title></Modal.Header>
            <Modal.Body>Do you really want to delete this {label}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onItemDeleteClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() =>{
                    onItemDeleteConfirm(index);
                    onItemDeleteClose();
                }}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ShowDeleteConfirmMessage;
