import { useState } from "react";
import { Todo, useTodoContext } from "../../../wrappers/TodoContext";
import styles from "./TodoListItem.module.css";
import cx from "classnames";

type TodoListItemProps = {
  item: Todo;
};

const delitionDelay = 60000;

const dateOptions = {
  month: "short",
  day: "2-digit",
  year: "numeric",
} as const;

// That way it's easier to test the date sorting
const debugDateOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
} as const;

export const TodoListItem = ({ item }: TodoListItemProps) => {
  const { setCompleteTodo, deleteTodo } = useTodoContext();
  const [timeoutId, setTimeoutId] = useState<any>();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={styles.todoList}>
      <div className={styles.todoItem}>
        <input className={checked ? styles.checked : ""} type="checkbox" />
        <span
          className={styles.checkmark}
          onClick={() => {
            if (!checked) {
              let id = setTimeout(() => {
                deleteTodo(item.id);
              }, delitionDelay);
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
      {item.compleationDate && (
        <label className={styles.todoDate}>
          {item.compleationDate.toLocaleDateString("en-US", dateOptions)}
        </label>
      )}
      <br />
    </div>
  );
};

export default TodoListItem;
