
const allTodos = (state) => {
  const todosKeys = Object.keys(state.todos);
  return todosKeys.map( (todoId) => (state.todos[todoId]));
}

export default allTodos;


