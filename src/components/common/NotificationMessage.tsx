import React, {useState, useEffect} from "react";
import {FiMessageCircle, FiX} from "react-icons/fi";
import {Col, Row} from "react-bootstrap";
import {IPopupMessage} from "./Types"

type NotificationMessageProps = {
    message : IPopupMessage | null
    showPopUp : boolean
}

const NotificationMessage:React.FC<NotificationMessageProps> = (props) => {
   const {message, showPopUp} = props;
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null >(null);
    const [isPopupMessageShow, setPopupMessageShow] = useState<Boolean>(false);

    const handleClosePopupMessage = () => {
        setPopupMessageShow(false);
    }

    useEffect(() =>{
        if(message) {
            setPopupMessage(message);
            setPopupMessageShow(showPopUp);
        }
        setTimeout(() => {
            setPopupMessageShow(false)
        },20000);
    },[message, showPopUp])

    return (
        <React.Fragment>
            {isPopupMessageShow &&
            <Row xs={12} className={popupMessage?.className + " pop_up ms-1 d-flex mb-5"}>
                <Col lg={11} xs={11} className='d-flex align-items-center'>
                    <FiMessageCircle className="me-1" size={22}/>
                    {popupMessage?.message}
                </Col>
                <Col lg={1} xs={1} className="pe-0">
                    <FiX onClick={handleClosePopupMessage} className='popup-close' size={22}/>
                </Col>
            </Row>
            }
        </React.Fragment>
    );
}

export default NotificationMessage