import React, { useState } from "react";
import styles from "./AddInput.module.css";
import { useTodoContext } from "../../../wrappers/TodoContext";
import cx from "classnames";

export const AddInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const { addTodo } = useTodoContext();

  return (
    <div
      className={cx(styles.inputWrapper, { [styles.wrapperActive]: active })}
    >
      <div className={styles.plusWrapper}>
        <div className={styles.plus} />
      </div>
      <input
        className={styles.textInput}
        type={"text"}
        size={50}
        maxLength={250}
        placeholder={"Add new task"}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={(e) => {
          let value = e.target?.value || "";
          setInputValue(value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(inputValue);
            setInputValue("");
          }
        }}
        value={inputValue}
      />
      {(active || inputValue) && (
        <button
          className={cx(styles.addButton, {
            [styles.buttonActive]: !!inputValue,
          })}
          disabled={!inputValue}
          onClick={() => {
            addTodo(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default AddInput;
