import styles from './ListForm.module.scss'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../../../redux/listsRedux'

const ListForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
            e.preventDefault()
            dispatch(addList({ title, description}))
            setTitle('')
            setDescription('')
        }
    return (
       <form className={styles.listForm} onSubmit={handleSubmit}>
			<label className={styles.field}>
				Title: <TextInput placeholder='List title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
			</label>
			<label className={styles.field}>
				Desription: <TextInput type='text' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
			</label>
			<Button>Add List</Button>
		</form>
    )
}

export default ListForm