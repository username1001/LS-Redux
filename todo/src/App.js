import React, { Component } from 'react';
import AddToDo from './actions/index.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div>
        <input type="text"/>
        <button className="btn">Add Item</button>
      </div>
    );
  }
}

export default App;
