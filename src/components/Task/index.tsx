import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { ITask } from '../../App'
import styles from './task.module.css'

interface TaskProps {
    task: ITask;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
    return(
        <div className={styles.task}>
            <button 
                onClick={() => onComplete(task.id)} 
                className={styles.buttonCheck}
            >
                {task.isCompleted ? <CheckCircle size={24} className={styles.checkCircle}  /> : <Circle size={24} className={styles.circle} />}
            </button>

            <p>{task.content}</p>

            <Trash 
                size={24} 
                className={styles.trash} 
                onClick={() => onDelete(task.id)}
            />
        </div>
    )
}