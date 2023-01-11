import { Header } from './components/Header'
import { InsertTaskList } from './components/InsertTaskList'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />

      <main className={styles.wrapper}>
        <InsertTaskList />
      </main>
    </div>
  )
}

export default App
