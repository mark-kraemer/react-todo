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
