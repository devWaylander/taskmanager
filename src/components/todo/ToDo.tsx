import React from "react";
import TextInput from "../inputs/TextInput/TextInput";
import TodoList from "./TodoList";

export const ToDo = () => {
  return (
    <div>
      <div>
        <TextInput />
        <TodoList />
      </div>
    </div>
  );
};

export default ToDo;
