import React from "react";
import styles from "./App.module.css";
import AddInput from "./components/inputs/AddInput/AddInput";
import TodoList from "./components/TodoList/TodoList";
import { TodoContextProvider } from "./wrappers/TodoContext";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Task Manager</header>
      <div className={styles.container}>
        <h1 className={styles.listTitle}>Work</h1>
        <TodoContextProvider>
          <AddInput />
          <TodoList />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
