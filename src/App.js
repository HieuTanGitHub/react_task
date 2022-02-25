import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { useState, useEffect } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const deleteTask = async (id) => {
    await fetch(`https://hieutanapp.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch("https://hieutanapp.herokuapp.com/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };
  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("https://hieutanapp.herokuapp.com/tasks/");
    const data = await res.json();
    return data;
  };
  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`https://hieutanapp.herokuapp.com/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const ToggleRemider = async (id) => {
    const taskToggle = await fetchTask(id);
    const updateTask = { ...taskToggle, reminder: !taskToggle.reminder };
    const res = await fetch(`https://hieutanapp.herokuapp.com/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
    <div className="container">
      <Header
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
        title="Task Tracker"
      />
     
     
      
        <Route path="/" exact render={(props)=>(
          <>
             {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Task tasks={tasks} onDelete={deleteTask} onToggle={ToggleRemider} />
              ) : (
                "No task to display"
              )}
          </>
        )}></Route>
        <Route path="/about" component={About}></Route>
        
      
      <Navbar/>
    </div>
    </Router>
  );
}

export default App;
