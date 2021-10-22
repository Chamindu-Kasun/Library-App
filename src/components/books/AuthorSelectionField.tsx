import React, {useEffect, useState} from "react";
import { Form} from "react-bootstrap";
import Select from "react-select/base";
import {IAuthor, IBook, selectorOptionType} from "../common/Types";

type AuthorSectionFieldProps = {
    authors : IAuthor[] | null;
}

const AuthorSelectionField: React.FC<AuthorSectionFieldProps> = (props) => {
    const {authors} = props;
    const [selectOptions , setSelectOptions] = useState<selectorOptionType>()

    //Set Select Options (authors => options)
    useEffect(() => {
      if(!authors)return;
      let options : selectorOptionType[] = [];
      for(let i=0 ; i < authors.length; i++){
          options.push({
             label: authors[i].name,
             value: authors[i]
          });
      }
    }, [authors])

    //Custom styles


    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-3"}>Author</Form.Label>
            <Select
                className="select-control"
                classNamePrefix="select-control"
                // isSearchable
                // isClearable
                // options={!optionList ? [] : optionList}
                // styles={customStyles}
                // onChange={handleOnAuthorChange}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default AuthorSelectionField