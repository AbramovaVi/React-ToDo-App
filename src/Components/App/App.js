import styles from './App.module.scss';
import { useState } from 'react';
import ToDo from "../ToDo";
import ToDoForm from "../ToDoForm";

import darkMode from '../../img/darkMode.png';
import lightMode from '../../img/light-mode.png';

function App() {
  const [todos, setTodos] = useState([]);
  let [theme, setTheme] = useState(localStorage.getItem('theme'));
  theme == 'dark' ? document.body.style.backgroundColor = "#181823" : document.body.style.backgroundColor = "white";

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem])
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
        ...todos.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  };
  const themeChanger = () => {
    localStorage.getItem('theme') == 'dark' ?
        localStorage.setItem('theme', 'light') :
        localStorage.setItem('theme', 'dark');
    setTheme(localStorage.getItem('theme'));
    theme == 'dark' ? document.body.style.backgroundColor = "#181823" : document.body.style.backgroundColor = "white";
  };


  return (
    <div className={ styles.App } data-theme = { theme }>
      <div className={ styles.overlay }></div>
      <div className={ styles.overlay2 }></div>
      <header>
        <h1>TODO: {todos.length}</h1>
        <img onClick={themeChanger} src={theme == 'dark' ? lightMode : darkMode} className={styles.icon}></img>
      </header>
      <ToDoForm
        addTask = {addTask}
        theme = { theme }
      />
      {todos.map((todo) => {
        return (
            <ToDo
              key = {todo.id}
              todo = {todo}
              toggleTask = {handleToggle}
              removeTask = {removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;
