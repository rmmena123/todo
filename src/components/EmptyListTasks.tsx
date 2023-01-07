import styles from './EmptyListTasks.module.css'
import { ClipboardText } from 'phosphor-react'

export function EmptyListTasks() {
    return(
        <div className={styles.emptyListTasks}>
            <ClipboardText size={56} />
            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}