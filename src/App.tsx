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

      <main className={styles.wrapper}>
        <InsertTask />
      </main>
    </div>
  )
}

export default App
