import React from "react";
import styles from "./TodoList.module.css";
import { useTodoContext } from "../../wrappers/TodoContext";
import { TodoListItem } from "./TodoListItem";
import { getSortedTodos } from "../../utils/list";

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div className={styles.todoList}>
      <ul>
        {getSortedTodos(todos, {}).map((entry, index) => {
          return (
            <div key={entry.id}>
              <TodoListItem item={entry} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
