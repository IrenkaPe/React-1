import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchString } from '../../../redux/store'

const SearchForm = () => {
	

	const dispatch = useDispatch()
	const searchString = useSelector(state => state.searchString)
	const [query, setQuery] = useState(searchString)

	useEffect(() => {
    setQuery(searchString);
 		 }, [searchString]); // synchronizuje lokalny stan z Reduxem

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(updateSearchString(query))
		setQuery('')
	}

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput placeholder='Search...' type='text' value={query} onChange={e => setQuery(e.target.value)} />

			<Button type='submit'>
				<span className='fa fa-search' />
			</Button>
			
		</form>
	)
}

export default SearchForm
