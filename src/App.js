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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
