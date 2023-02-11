import { useState, useEffect } from "react";
import { Header } from './components/Header';
import { TasksList } from "./components/TasksList";
import { v4 as uuidv4 } from "uuid";

import './global.css'
import styles from './App.module.css'

const LOCAL_STORAGE_KEY = "todo:savedTasksList";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function setNewTasks(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskContent: string) {
    setNewTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: taskContent,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });

    setNewTasks(newTasks);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setNewTasks(newTasks);
  }

  return (
    <div className="App">
      <Header onAddTask={addTask}/>

      <main className={styles.wrapper}>
        <TasksList
          tasks={tasks}
          onComplete={toggleTaskCompleted}
          onDelete={deleteTask}
        />
      </main>
    </div>
  )
}

export default App
