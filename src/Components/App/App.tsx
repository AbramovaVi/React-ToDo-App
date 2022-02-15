import { useState } from 'react';
import ToDoItem from "../ToDoItem";
import ToDoForm from "../ToDoForm";
import { ITodo } from "../../types/data";
// @ts-ignore
import darkMode from '../../img/darkMode.png';
// @ts-ignore
import lightMode from '../../img/light-mode.png';
// @ts-ignore
import styles from './App.module.scss';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [initialTodos, setInitialTodos] = useState<ITodo[]>([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  theme === 'dark' ? document.body.style.backgroundColor = "#181823" : document.body.style.backgroundColor = "white";

  const addTask = (userInput: string) => {
    if (userInput) {
      setTodos([...todos,{
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false,
      }])
    }
  };

  const removeTask = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setInitialTodos([...initialTodos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id: string) => {
    setTodos([
        ...todos.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  };
  const themeChanger = (): void => {
    localStorage.getItem('theme') === 'dark' ?
        localStorage.setItem('theme', 'light') :
        localStorage.setItem('theme', 'dark');
    setTheme(localStorage.getItem('theme'));
    theme === 'dark' ? document.body.style.backgroundColor = "#181823" : document.body.style.backgroundColor = "white";
  };

  // const reverseHandler = () => {
  //   let reversed = todos.reverse();
  //   setTodos([...reversed]);
  // };

  const completeSort = () => {
    setInitialTodos(todos);
    let filtered = todos.filter( el => el.complete);
    setTodos([...filtered]);
  }
  const activeSort = () => {
    setInitialTodos(todos);
    let filtered = todos.filter( el => !el.complete);
    setTodos([...filtered]);
  }
  const showAll = () => {
    setTodos([...initialTodos]);
  }

  return (
    <div className={ styles.App } data-theme = { theme }>
      <div className={ styles.overlay } />
      <div className={ styles.overlay2 } />
      <header>
        <h1>TODO: {todos.length}</h1>
        <img
            onClick={themeChanger}
            src={theme === 'dark' ? lightMode : darkMode}
            className={styles.icon}
            alt='Theme changer'
        />
      </header>
      <ToDoForm
          addTask = {addTask}
          theme = { theme }
      />
      <div className={styles['sort-wrapper']}>
        <button onClick={activeSort}>active</button>
        <button onClick={completeSort}>completed</button>
        <button onClick={showAll}>all</button>
      </div>
      {todos.map((todo) => {
        return (
            <ToDoItem
              key = {todo.id}
              {...todo}
              toggleTask = {handleToggle}
              removeTask = {removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;
