import React, {ChangeEvent, useEffect, useState} from "react";
import { Form} from "react-bootstrap";
import Select from "react-select";
import {IAuthor, IBook, selectorOptionType} from "../common/Types";

type AuthorSectionFieldProps = {
    onSelectBookAuthorChange : (option: any) => void;
    authors : IAuthor[] | null;
}

const AuthorSelectionField: React.FC<AuthorSectionFieldProps> = (props) => {
    const {authors} = props;
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    const [selectOptions , setSelectOptions] = useState<selectorOptionType[] | null>(null)

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
        setSelectOptions(options)
    }, [authors])

    //Custom styles
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid #989898`,
            borderRadius: 0,
        }),
    }

    //Handle Option Selection
    const handleOnAuthorChange = (option: any) => {
        console.log(option)
        if(!option) {
            setBookAuthor(null)
            return ;
        }
        if(option){
            setBookAuthor(option.value)
            props.onSelectBookAuthorChange(option);
        }
    };

    return(
        <Form.Group className={"ms-5"}>
            <Form.Label className={"form-label mb-0 mt-3"}>Author</Form.Label>
            <Select
                className="select-control"
                classNamePrefix="select-control"
                isSearchable
                isClearable
                options={!selectOptions ? [] : selectOptions}
                styles={customStyles}
                onChange={handleOnAuthorChange}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
    )
}


export default AuthorSelectionField