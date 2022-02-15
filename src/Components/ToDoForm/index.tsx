// @ts-ignore
import styles from './ToDoForm.module.css';
import { useState } from 'react';
// @ts-ignore
import pen from '../../img/pen-icon.png';
// @ts-ignore
import penLight from '../../img/pen-icon--light.png';

interface ITodoFormProps {
    addTask: (a:string) => void;
    theme: string | null;
}

const ToDoForm: React.FC<ITodoFormProps> = ({ addTask, theme }) => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUserInput(e.target.value);
    };
    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if ( e.key === 'Enter') {
            e.preventDefault();
            addTask(userInput);
            setUserInput('');
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
            <div onClick={ handleSubmit }>
                <img src={theme === 'dark' ? penLight : pen} className={styles.icon} alt='add todo'/>
            </div>
        </form>
    )
}

export default ToDoForm;