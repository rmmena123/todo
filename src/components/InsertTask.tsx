import { PlusCircle } from 'phosphor-react'
import styles from './InsertTask.module.css'

export function InsertTask() {
    return (
        <div className={styles.insertTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}