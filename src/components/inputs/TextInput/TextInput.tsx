import React, { useId, useState } from "react";
import styles from './TextInput.module.css';
import { useThemeContext } from "../../../wrappers/ThemeContext";
import type { Todo } from "../../../wrappers/TodoContext";

type TextInputProps = {
  addTodo: (todoText: Todo) => void
}

export const TextInput = ({addTodo}: TextInputProps) => {
  const [todoText, setTodoText] = useState<string>("");
  const {style} = useThemeContext();
  // TODO: fix to unique
  const id:string = useId();

  return (
    <div>
      <button className={styles.addTodoButton} 
      style={ {"background": style.elementsBackground, color: style.foreground} }
      onClick={() => {
        addTodo({"id": id, "text": todoText})
      }}>
      </button>
      <input className={styles.textInput} type={"text"} size={50} maxLength={250}
      placeholder={"Add new task"}
      style={ {"background": style.elementsBackground, "color": style.foreground} }
      onChange={(e) => {
        setTodoText(e.target.value)
      }}/>
    </div>
  );
}

export default TextInput