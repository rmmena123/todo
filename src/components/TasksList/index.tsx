import { ClipboardText } from 'phosphor-react'
import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './taskslist.module.css'

interface TasksListProps {
    tasks: ITask[];
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
}

export function TasksList({ tasks, onDelete, onComplete }: TasksListProps) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return(
        <section className={styles.tasks}> 
            <header className={styles.header}>
                <div className={styles.statusTask}>
                    <div className={styles.createdTasks}>
                        Tarefas Criadas <span>{tasksQuantity}</span>
                    </div>

                    <div className={styles.finishedTasks}>
                        Concluídas <span>{completedTasks} de {tasksQuantity}</span>
                    </div>
                </div>
            </header>
        
            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task} 
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {tasks.length === 0 && (
                    <div className={styles.emptyListTasks}>
                        <ClipboardText size={56} />
                        <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}
            </div>
        </section>
    )
}