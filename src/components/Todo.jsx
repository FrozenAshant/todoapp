import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <h2 className='text-center mt-14'>My Todo</h2>
      <Form />
      <TodoList />
    </div>
  )
}

export default Todo
