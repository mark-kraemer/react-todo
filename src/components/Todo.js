import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = { edit: false }
  }

  saveTodo(event) {
    event.preventDefault()
    const app = this.props.app
    const todo = this.props.todo
    const text = this.refs.todoText.value
    const todosObject = app.state.todos

    todo.text = text
    todosObject[this.props.todoKey] = todo
    app.setState({todos: todosObject})
    this.setState({edit: false})
  }

  completeTodo() {
    const app = this.props.app
    const todo = this.props.todo
    const todosObject = app.state.todos

    todo.complete = this.refs.complete.checked
    todosObject[this.props.todoKey] = todo
    app.setState({todos: todosObject})
  }

  deleteTodo() {
    const app = this.props.app
    const todosObject = app.state.todos

    delete todosObject[this.props.todoKey]
    app.setState({todos: todosObject})
  }

  renderEdit() {
    this.setState({edit: true})
  }

  editTemplate() {
    const todo = this.props.todo
    return (
      <form onSubmit={this.saveTodo.bind(this)}>
        <div className="rows">
          <div className="eight columns">
            <input ref="todoText" type="text" className="u-full-width" defaultValue={todo.text} />
          </div>
          <div className="four columns">
            <input className="button-primary float-right" type="submit" value="Save" />
          </div>
        </div>
      </form>
    )
  }

  todoTemplate() {
    const todo = this.props.todo
    return (
      <div className="u-full-width">
        <div className="columns one">
          <input type="checkbox" ref="complete" checked={todo.complete} onChange={this.completeTodo.bind(this)} />
        </div>
        <div className="columns six">{todo.text}</div>
        <div className="columns five">
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
  todoKey: React.PropTypes.string.isRequired,
  todo: React.PropTypes.object.isRequired
}

export default Todo;
