import styles from './ListForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from '../Button/Button';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addList } from '../../redux/store';

const ListForm = ({ listId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId }));
        setTitle('');
        setDescription('');
    }
    return(
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description:</span>
            <TextInput id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} />
            <Button type="submit">ADD LIST</Button>
        </form>
    )
}
export default ListForm;