import './style.css';
import React from 'react';
import Header from './Header.js';
import AddTask from  './AddTask.js';
import Tasks from './Tasks.js';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Container } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const theme = createTheme();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/tasks')
      .then((r) => r.json())
      .then((data) => setTasks(data))
  }, []);

  function handleChange(e) {
    setNewTask(e.target.value);
    console.log(newTask);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('task added');

    const formData = {
      id: uuidv4(),
      title: newTask
    };

    const updatedTasks = [...tasks, formData];
    setTasks(updatedTasks);
    setNewTask('');
    console.log(formData);

   fetch('http://localhost:6001/tasks',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      })
      .then((r) => r.json())
      .catch((error) => console.log(error));
  }

  function handleDelete(id) {  
    fetch(`http://localhost:6001/tasks/${id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(deleteTask(id));
  }

  function deleteTask(id){
    const updatedTasks = tasks.filter((task) => task.id !== id );
    setTasks(updatedTasks);
  }

  function handleUpdateTask(updatedObj){
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedObj.id) {
        return updatedObj;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Container>
        <div>
          <Header
          />
        </div>
        <br></br>
        <div>
          <AddTask 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            newTask={newTask} 
            setNewTask={setNewTask}
            />
        </div>
        <br></br>
        <div className="taskbox">
              <Tasks 
                allTasks={tasks} 
                deleteTask={handleDelete}
                setAllTasks={setTasks}
                updateTask={handleUpdateTask}
              />   
        </div>  
      </Container>
    </div>
  );
}

export default App;
