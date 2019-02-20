import React from 'react';
import { receiveTodo } from '../todos/to_do_list_container'


class TodoForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todo: ""
    }

    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(event) {
    this.setState({todo: event.currentTarget.value});
  }

  handleSubmit(event) {
    this.props.receiveTodo(this.state.todo)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>Write your todo: {this.state.todo}</span>
        <input type="text" onChange={this.updateTodo} value={this.state.todo}/>
      </form>
    )
  } 
}

export default TodoForm;

