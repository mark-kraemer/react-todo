import React, { Component } from 'react';
import AddTodoForm from './components/AddTodoForm';
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

  render() {
    return (
      <div className="container">
        <h1>React Todo</h1>
        <AddTodoForm app={this}/>
      </div>
    );
  }
}

export default App;
