import React from 'react';
import styles from './App.module.css';
import ToDo from './components/todo/ToDo';
import { TodoContextProvider } from './wrappers/TodoContext';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        Task Manager
        <div className={styles.appList}>
        <TodoContextProvider>
          <ToDo/>
        </TodoContextProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
