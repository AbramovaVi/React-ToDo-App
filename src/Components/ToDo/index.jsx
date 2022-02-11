import styles from './ToDo.module.scss';
import remove from '../../img/remove-icon.png';

function Index({ todo, toggleTask, removeTask}) {
    return (
        <div key={ todo.id } className={styles['todo-item']}>
            {/*<input type="checkbox"/>*/}
            <span className={ todo.complete ? styles.strike : null } onClick={ () => toggleTask(todo.id) }>
                {todo.task}
            </span>
            <div onClick = {() => removeTask(todo.id) } className={styles['button-container']}>
                <img  src={remove} className={styles.icon}></img>
            </div>
        </div>
    )
}

export default Index;