import React, { Component } from 'react';

class Todo extends Component {

  render() {
    const todo = this.props.app.state.todos[this.props.todoKey]
    return (
      <div className="u-full-width" >{todo}</div>
    )
  }
}

Todo.propTypes = {
  app: React.PropTypes.object.isRequired,
  todoKey: React.PropTypes.string.isRequired
}

export default Todo;
