import React from "react"

type ShowSingleItemProps = {
    label:string;
}

const ShowSingleItem:React.FC<ShowSingleItemProps> = (props) => {
    return(
        <React.Fragment>
            <h3>This is {props.label} section</h3>
            <h6>I have born to do IT</h6>
        </React.Fragment>
    )
}

export default ShowSingleItem;