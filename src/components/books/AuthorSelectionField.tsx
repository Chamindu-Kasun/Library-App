import React, {ChangeEvent, useEffect, useState} from "react";
import { Form} from "react-bootstrap";
import Select from "react-select";
import {IAuthor, IBook, selectorOptionType} from "../common/Types";

type AuthorSectionFieldProps = {
    onSelectBookAuthorChange : (option: any) => void;
    authors : IAuthor[] | null;
    currentSelectedAuthor: IAuthor | null;
    isValid: boolean;
    setIsSelectorValidate : React.Dispatch<React.SetStateAction<boolean>>
}

const AuthorSelectionField: React.FC<AuthorSectionFieldProps> = (props) => {
    const {authors, currentSelectedAuthor} = props;
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    const [selectOptions , setSelectOptions] = useState<selectorOptionType[] | null>(null)
    //Border
    const [selectorBorderColor, setSelectorBorderColor] =
        useState<string>("#989898");

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

    useEffect(() => {
        setBookAuthor(currentSelectedAuthor)
    }, [currentSelectedAuthor])

    //Custom styles
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid ${selectorBorderColor}`,
            borderRadius: "0px",
        }),
    }

    //Handle Option Selection
    const handleOnAuthorChange = (option: any) => {
        if(!option) {
            setBookAuthor(null)
            props.onSelectBookAuthorChange(null);
            setSelectorBorderColor("#DC3545");
            props.setIsSelectorValidate(true);
            return ;
        }
             setBookAuthor(option)
             props.onSelectBookAuthorChange(option);
             setSelectorBorderColor("#198754");
             props.setIsSelectorValidate(false);
            return;
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
                value={selectOptions?.filter(option => option.label === bookAuthor?.name)}
                styles={customStyles}
                onChange={handleOnAuthorChange}
            />
            {props.isValid &&
            <small className="text-danger fw-bold">
                Please Select An Author
            </small>
            }
        </Form.Group>
    )
}


export default AuthorSelectionField