import React, { Component } from 'react';

class TodoList extends Component {

  renderTodo(key) {
    const todo = this.props.app.state.todos[key]
    return <div className="u-full-width" key={key}>{todo}</div>
  }

  render() {
    return (
      <div className="twelve columns">
        {Object.keys(this.props.app.state.todos).map(this.renderTodo.bind(this))}
      </div>
    )
  }
}

TodoList.propTypes = {
  app: React.PropTypes.object.isRequired
}

export default TodoList;
