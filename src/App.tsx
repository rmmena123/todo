import { Header } from './components/Header'
import { InsertTask } from './components/InsertTask'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <InsertTask />
      </div>
    </div>
  )
}

export default App
