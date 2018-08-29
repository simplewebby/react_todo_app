import React, { Component } from 'react';
import Tasks from './tasks';
import AddTask from './AddTask';


class App extends Component {

  state = {
    tasks: [
        { id: 1, task: 'Read a book'},
        {
          id: 2, task: 'Write a code'
        }
    ]
  }

  deleteTask = (id) =>{
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    });
    this.setState({
      tasks
    })
  }

  addTask = (task) => {
    task.id = Math.random();
    let tasks = [ ...this.state.tasks, task];
    this.setState({
      tasks:tasks
    })
  }
    render() {
    return (
      <div className="App container">
       <h3 className="center white-text">Tasks For Today:</h3>
       <Tasks  tasks={this.state.tasks} deleteTask={this.deleteTask}/>
       <AddTask  addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
