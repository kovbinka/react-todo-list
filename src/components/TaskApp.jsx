import { useState } from 'react';
import UserInput from './UserInput';
import ListPanel from './ListPanel';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text,
        done: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? {... task, done: !task.done} : task));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div>
      <UserInput onAddTask={addTask} />
      <ListPanel tasks={tasks} onDelete={deleteTask} onEdit={editTask} onToggleDone={toggleDone} />
    </div>
  );
};

export default TaskApp;
