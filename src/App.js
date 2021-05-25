import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      text: 'asdfasdafsd',
      id: 1,
      day: 'blah',
      reminder: true
    },
    {
      text: 'asdfasfdsafdsa',
      id: 2,
      day: 'blah',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Fresh outta tasks, yo!'}
    </div>
  );
}

export default App;
