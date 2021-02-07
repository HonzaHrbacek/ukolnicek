import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() { 

  // State for tasks
  // Destructuring of useState array - first item is the state variable and the second is the method to upday the state
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Doctors appointment',
    //   day: 'Jan 27 at 2:30pm',
    //   reminder: true
    // }, 
  ])

  // State for addTask component. Default value false - the addTask component is not shown
  const [showAddTask, setShowAddTask] = useState(false)

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))    
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Load data from localStorage
  useEffect(() => {
    const localData = localStorage.getItem('tasks')
    if (localData) {
      setTasks(JSON.parse(localData))
    }
  }, [])
  
  // Store data to localStorage, when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
      {/* Short circuiting - show addTask if it is set to true */}
      {showAddTask && <AddTask onAdd={addTask} />} 
      
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Žádné úkoly... To je divné, co? ;)')}
    </div>
  );
}

export default App;
