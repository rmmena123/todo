import { Header } from './components/Header'
import { InsertTask } from './components/InsertTask'
import { StatusTask } from './components/StatusTask'
import { EmptyListTasks } from './components/EmptyListTasks'

import './global.css'
import styles from './App.module.css'
import { Task } from './components/Task'

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <InsertTask />
        <StatusTask />

        <main className={styles.tasksList}>
          <EmptyListTasks />
          <Task isCompleted={false}/>
          <Task isCompleted={true}/>
        </main>
      </div>
    </div>
  )
}

export default App
