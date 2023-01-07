import { Header } from './components/Header'
import { InsertTask } from './components/InsertTask'
import { StatusTask } from './components/StatusTask'
import { EmptyListTasks } from './components/EmptyListTasks'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <InsertTask />
        <StatusTask />
        <EmptyListTasks />

      </div>
    </div>
  )
}

export default App
