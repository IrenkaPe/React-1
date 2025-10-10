import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] =useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action
        ({ title: title,
            icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} 
        onSubmit={handleSubmit}>
            <label className={styles.field}>
                Title: <TextInput 
                    placeholder="title" 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} />
            </label>
            <label className={styles.field}>
                Icon: <TextInput type ="text" 
                    placeholder="icon-name "
                    value= {icon} 
                    onChange={e => setIcon(e.target.value)}/>
            </label>
            <Button>Add column</Button>
        </form >
	);
};

export default ColumnForm;

   