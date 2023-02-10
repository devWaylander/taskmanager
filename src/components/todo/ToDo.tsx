import React from 'react';
import { useTodoContext } from '../../wrappers/TodoContext';
import TextInput from '../inputs/TextInput/TextInput';
import TodoList from './TodoList';

export const ToDo = () => {
  const {todos, addTodo, deleteTodo, completeTodo} = useTodoContext()

  return (
    <div>
      <div>
        <TextInput addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
      </div>
    </div>
  );
}

export default ToDo