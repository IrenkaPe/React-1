import styles from "./SearchForm.module.scss"
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchString } from "../../redux/store";

const SearchForm = () => {
    const [query, setQuery] =useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch( updateSearchString(query));
        setQuery('');
    };

    return (
        <form className={styles.searchForm}
        onSubmit = {handleSubmit}>
            <TextInput placeholder="Search..."
            type="text"
            value = {query}
            onChange = { e => setQuery(e.target.value)}/>

            <Button type ="submit">
                <span className="fa fa-search" />
            </Button>
            <TextInput placeholder="Add.."/>
            
            <Button type="button">Create</Button>
        </form>
    );
  };

  export default SearchForm;