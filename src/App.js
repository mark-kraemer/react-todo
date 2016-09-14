import React, { Component } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Todo from './components/Todo';
import './normalize.css'
import './skeleton.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: {}
    }
  }

  componentDidMount() {
    var localStorageRef = localStorage.getItem('todos')

    if(localStorageRef) {
      this.setState({
        todos : JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todos', JSON.stringify(nextState.todos))
  }

  renderList(condition) {
   const todoComponents = Object.keys(this.state.todos).map((key) => {
      const todo = this.state.todos[key]
      if(todo.complete === condition.isComplete) {
        return <Todo app={this} todoKey={key} key={key} todo={todo}/>
      }
    })
    return todoComponents
  }

  render() {
    return (
      <div className="container">
        <h1>React Todo</h1>
        <div className="eight columns">
          <h3>Completed</h3>
          {this.renderList({isComplete: true})}
        </div>

        <div className="eight columns">
          <h3>Incomplete</h3>
          {this.renderList({isComplete: false})}
        </div>
        <AddTodoForm app={this}/>
      </div>
    );
  }
}

export default App;
