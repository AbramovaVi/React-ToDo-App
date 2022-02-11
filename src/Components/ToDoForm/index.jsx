import styles from './ToDoForm.module.css';
import { useState } from 'react';
import pen from '../../img/pen-icon.png';
import penLight from '../../img/pen-icon--light.png';

function ToDoForm({ addTask, theme }) {
    const [userInput, setUserInput] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    const handleKeyPress = (e) => {
        if ( e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    return (
        <form onSubmit={ handleSubmit } className={styles.ToDoForm}>
            <input
                value = { userInput }
                type = 'text'
                onChange = { handleChange }
                placeholder = 'type todo here'
                onKeyDown = { handleKeyPress }
            />
            <div onClick={handleSubmit}>
                <img src={theme == 'dark' ? penLight : pen} className={styles.icon}/>
            </div>
        </form>
    )
}

export default ToDoForm;