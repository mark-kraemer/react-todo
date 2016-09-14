import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = { edit: false }
  }

  saveTodo(event) {
    event.preventDefault()
    const app = this.props.app
    const todoText = this.refs.todoText.value
    const todosObject = app.state.todos

    todosObject[this.props.todoKey] = todoText
    app.setState({todos: todosObject})
    this.setState({edit: false})
  }

  deleteTodo() {

  }

  renderEdit() {
    this.setState({edit: true})
  }

  editTemplate() {
    const todo = this.props.app.state.todos[this.props.todoKey]
    return (
      <form onSubmit={this.saveTodo.bind(this)}>
        <div className="rows">
          <div className="eight columns">
            <input ref="todoText" type="text" className="u-full-width" defaultValue={todo} />
          </div>
          <div className="four columns">
            <input className="button-primary float-right" type="submit" value="Save" />
          </div>
        </div>
      </form>
    )
  }

  todoTemplate() {
    const todo = this.props.app.state.todos[this.props.todoKey]
    return (
      <div className="u-full-width">
        <div className="columns six">{todo}</div>
        <div className="columns six">
          <div className="float-right">
            <button className="button" onClick={this.renderEdit.bind(this)}>Edit</button>
            <button className="button" onClick={this.deleteTodo.bind(this)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.edit) {
      return this.editTemplate()
    } else {
      return this.todoTemplate()
    }
  }
}

Todo.propTypes = {
  app: React.PropTypes.object.isRequired,
  todoKey: React.PropTypes.string.isRequired
}

export default Todo;
