import styles from "./SearchForm.module.scss"
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..."/>

            <Button type ="submit">
                <span className="fa fa-search" />
            </Button>
            <TextInput placeholder="Add.."/>
            
            <Button type="button">Create</Button>
        </form>
    );
  };

  export default SearchForm;