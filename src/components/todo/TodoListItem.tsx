import { useState, useEffect } from "react";
import { Todo, useTodoContext } from "../../wrappers/TodoContext";
import styles from "./TodoListItem.module.css";
import cx from "classnames";

type TodoListItemProps = {
  item: Todo;
};

export const TodoListItem = ({ item }: TodoListItemProps) => {
  const { setCompleteTodo, deleteTodo } = useTodoContext();
  const [timeoutId, setTimeoutId] = useState<any>();
  const [checked, setChecked] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  useEffect(() => {
    checked && setTheme(styles.checked);
    !checked && setTheme("");
  }, [checked]);

  return (
    <div className={styles.todoList}>
      <div className={styles.todoItem}>
        <input className={theme} type="checkbox" />
        <span
          className={styles.checkmark}
          onClick={() => {
            if (!checked) {
              let id = setTimeout(() => {
                deleteTodo(item.id);
              }, 60000);
              setTimeoutId(id);
            } else {
              clearInterval(timeoutId);
            }
            setCompleteTodo(item.id, !checked);
            setChecked((prev) => !prev);
          }}
        />
      </div>
      <label className={cx(styles.todoText, { [styles.checkedTodo]: checked })}>
        {item.text}
      </label>
      <label className={styles.todoDate}>{item.date}</label>
      <br />
    </div>
  );
};

export default TodoListItem;
