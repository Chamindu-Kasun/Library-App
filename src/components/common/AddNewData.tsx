import React from "react";
import {Row, Col} from "react-bootstrap";
import {FiPlus} from "react-icons/fi";

type AddNewDataProps = {
    field: string;
    onAddClick: () => void;
}
const AddNewData: React.FC<AddNewDataProps> = (props) => {
    const{field,onAddClick}=props;

    return (
        <Row xs={3} className={"mt-3"} onClick={onAddClick}>
            <Col xs={12} className={"add-data px-0 d-flex align-items-end"}>
            <FiPlus size={24} color='#0f4aa6' className="px-0 me-2"/>
            <span>Add {field}</span>
            </Col>
        </Row>
    )
}

export default AddNewData;