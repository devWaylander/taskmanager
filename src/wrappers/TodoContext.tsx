import { v4 as uuid } from "uuid";
import React, { useContext, useEffect, useMemo, useState } from "react";

const dataKey = "todos";

export type Todo = {
  id: string;
  text: string;
  compleationDate?: Date;
};

type TodoContextState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  setCompleteTodo: (id: string, checked: boolean) => void;
};

const loadFromLocalStorage = () => {
  let todos: Todo[];
  if (localStorage.getItem(dataKey)) {
    todos = JSON.parse(localStorage.getItem(dataKey) ?? "");
    if (!todos) return [];

    todos = todos.filter((v) => !v.compleationDate);
    localStorage.setItem(dataKey, JSON.stringify(todos));

    return todos;
  } else {
    return [];
  }
};

export const TodoContext = React.createContext<TodoContextState>(
  {} as TodoContextState
);

export const TodoContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [todos, setTodos] = useState<Todo[]>(loadFromLocalStorage());

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(todos));
  }, [todos]);

  const value = useMemo(
    () => ({
      todos: todos,
      addTodo: (text: string) => {
        if (text !== "") {
          setTodos((prev) => [...prev, { id: uuid(), text: text }]);
        }
      },
      deleteTodo: (id: string) => {
        setTodos((prev) =>
          prev.filter((todo) => {
            return todo.id !== id;
          })
        );
      },
      setCompleteTodo: (id: string, checked: boolean) => {
        setTodos((prev) =>
          prev.map((v: Todo) => {
            if (v.id === id) {
              if (checked) v.compleationDate = new Date();
              else v.compleationDate = undefined;
            }
            return v;
          })
        );
      },
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = (): TodoContextState => useContext(TodoContext);
