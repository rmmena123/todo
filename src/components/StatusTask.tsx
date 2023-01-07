import styles from './StatusTask.module.css'

export function StatusTask() {
    return (
        <div className={styles.statusTask}>
            <div className={styles.createdTasks}>
                Tarefas Criadas <span>5</span>
            </div>

            <div className={styles.finishedTasks}>
                Concluídas <span>2 de 5</span>
            </div>
        </div>
    )
}