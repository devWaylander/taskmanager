import React, { useContext, useEffect, useMemo, useState } from "react";

type TodoContextState = {
  todos: Todo[],
  addTodo: (todo: Todo) => void,
  deleteTodo: (text: string) => void,
  completeTodo: (text: string) => void,
}

const loadFromLocalStorage = (key: string) => {
  let todos:Todo[] = [ {"id": "", "text":""} ];
  if (localStorage.getItem(key)) {
    todos = JSON.parse(localStorage.getItem(key) ?? "");
    return todos;
  } else {
    return [];
  }
}

export const TodoContext = React.createContext<TodoContextState>({} as TodoContextState);

export const TodoContextProvider = ({children}:React.PropsWithChildren<{}>) => {
  const dataKey = 'todos';
  const [todos, setTodos] = useState<Todo[]>(loadFromLocalStorage(dataKey));

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(todos));
  }, [todos]);

  const value = useMemo(() => ({
    todos:todos,
    addTodo: (todo:Todo) => {
      if (todo.id !== "" && todo.text !== "") {
        setTodos([...todos, {"id": todo.id, "text": todo.text}]);
      }
    },
    deleteTodo: (text:string) => {
      const newTodos = todos.filter((todo) => {
        return todo.text !== text;
      });
      setTodos(newTodos);
    },
    // ?????
    completeTodo: (text:string) => {

    }
  }), [todos]);

  return (
    <TodoContext.Provider value={ value }>
      { children }
    </TodoContext.Provider>
  );
}

export type Todo = {
  id:string,
  text:string,
  date?:string
}

export const useTodoContext = ():TodoContextState => useContext(TodoContext);