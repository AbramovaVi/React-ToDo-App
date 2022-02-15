// @ts-ignore
import styles from './ToDoItem.module.scss';
// @ts-ignore
import remove from '../../img/remove-icon.png';
import { ITodo } from "../../types/data";

interface ITodoItemProps extends ITodo {
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const {id, task, complete, toggleTask, removeTask} = props;
    return (
        <div key={ id } className={styles['todo-item']}>
            {/*<input type="checkbox"/>*/}
            <span className={ complete ? styles.strike : null } onClick={ () => toggleTask(id) }>
                {task}
            </span>
            <div onClick = {() => removeTask(id) } className={styles['button-container']}>
                <img  src={remove} className={styles.icon} alt='remove'/>
            </div>
        </div>
    )
}

export default TodoItem;