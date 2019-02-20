import React from 'react';
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form';

const TodoList = ({ todos, receiveTodo }) => (
  <ul>
    <TodoForm receiveTodo={receiveTodo}/>
    {
      todos.map( (todo) => (
         <TodoListItem todo={todo} key={todo.id}  />
      ))
    }
  </ul>
)

export default TodoList;


