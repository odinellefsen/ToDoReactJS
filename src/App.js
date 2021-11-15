import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting at school',
        day: 'Jan 30th at 7:15pm',
        reminder: true,
    },
    {

        id: 2,
        text: 'Doctors appointment',
        day: 'Sep 19th at 12:01 AM',
        reminder: true,
    },
    {

        id: 3,
        text: 'Pizza Time',
        day: 'Aug 1st at 05:35pm',
        reminder: false,
    }, 
])

// Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

  console.log(id)
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : (
         'No Tasks To Show'
          )}
    </div>
  );
}

export default App;