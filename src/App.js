import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      text: 'asdfasdafsd',
      id: 1,
      day: 'blah'
    },
    {
      text: 'asdfasfdsafdsa',
      id: 2,
      day: 'blah'
    }
  ])

  const deleteTask = (id) => {
    console.log('deleted id: ' + id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
