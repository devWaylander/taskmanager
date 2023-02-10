import React from "react";
import styles from "./App.module.css";
import TextInput from "./components/inputs/TextInput/TextInput";
import TodoList from "./components/todo/TodoList";
import { TodoContextProvider } from "./wrappers/TodoContext";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Task Manager</header>
      <div className={styles.container}>
        <h1 className={styles.listTitle}>Work</h1>
        <TodoContextProvider>
          <TextInput />
          <TodoList />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
