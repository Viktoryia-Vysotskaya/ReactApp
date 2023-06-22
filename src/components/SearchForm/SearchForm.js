import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const [phrase, setPhrase] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: phrase })
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput id="searchPhrase" name="searchPhrase" placeholder="Search..." value={phrase} onChange={e => setPhrase(e.target.value)}/>
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;