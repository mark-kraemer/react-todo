import React, { Component } from 'react';

class AddTodoForm extends Component {

  createTodo(event) {
    event.preventDefault()
    const app = this.props.app
    const time = (new Date()).getTime()
    const todosObject = app.state.todos
    const todo = this.refs.todo.value

    todosObject['todo-' + time] = todo
    app.setState({todos: todosObject})
    this.refs.todoForm.reset();
  }

  render() {
    return (
      <form ref="todoForm" onSubmit={this.createTodo.bind(this)}>
        <div className="rows">
          <div className="six columns">
            <input ref="todo" type="text" className="u-full-width"/>
          </div>
          <div className="six columns">
            <input className="button-primary" type="submit" value="Add Todo" />
          </div>
        </div>
      </form>
    )
  }
}

AddTodoForm.propTypes = {
  app: React.PropTypes.object.isRequired
}

export default AddTodoForm;
