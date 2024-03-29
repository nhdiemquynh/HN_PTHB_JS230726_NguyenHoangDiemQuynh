
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const API_URL = 'http://localhost:3001/api/v1/tasks';

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  interface Task {
    id: number;
    name: string;
    status: boolean;
  }

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    try {
      const response = await axios.post(`${API_URL}/`, { name: inputValue, status: true });
      console.log(response);
      await fetchTasks();
    } catch (error) {
      console.error('Failed to add task', error);
    }
  };

  const handleUpdateTask = async (taskId: number, taskName: string, status: boolean) => {
    try {
      await axios.put(`${API_URL}/${taskId}`, { name: taskName, status });
      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <main>
          <form>
            <input type="text" placeholder="Add a task" onChange={(e) => handleInputChange(e)}/>
            <button type="button" onClick={() => handleAddTask() }>
              Add
            </button>
          </form>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
                  {task.name}
                </span>
                <input
                  type="checkbox"
                  checked={task.status}
                  onChange={() => handleUpdateTask(task.id, task.name, !task.status)}
                />
                <button type="button" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;