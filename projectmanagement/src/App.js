import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
const App = () => {
const [tasks, setTasks] = useState([]);
const addTask = (description, project) => {
setTasks([...tasks, { description, project, status: 'Pending' }]);
};
const changeStatus = (index) => {
const newTasks = [...tasks];
const task = newTasks[index];
switch (task.status) {
case 'Pending':
task.status = 'InProgress';
break;
case 'InProgress':
task.status = 'Completed';
break;
case 'Completed':
task.status = 'Pending';
break;
default:
break;
}
setTasks(newTasks);
};
return (
<div className="App">
<h1>Task Management System</h1>
<TaskForm onAddTask={addTask} />
<TaskList tasks={tasks} onStatusChange={changeStatus} />
</div>
);
};
export default App;