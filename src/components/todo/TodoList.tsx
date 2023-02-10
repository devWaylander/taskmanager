import React from "react";
import styles from './TodoList.module.css';
import { useThemeContext } from "../../wrappers/ThemeContext";
import { Todo } from "../../wrappers/TodoContext";

type TodoListProps = {
  todos: Todo[],
  deleteTodo: (text: string) => void
  completeTodo: (text: string) => void
}

export const TodoList = ({todos, deleteTodo, completeTodo}: TodoListProps) => {
  const {style} = useThemeContext();

  return (
    <div>
      <ul className={styles.todoList}>
        {todos.map((entry, index) => (
          <div key={todos[index].id}>
            <input type="checkbox" id={todos[index].id} name="vehicle2" value="Car"/>
            <label id={todos[index].id}>{todos[index].text}</label>
            <label id={todos[index].id}>{todos[index].date}</label><br/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList