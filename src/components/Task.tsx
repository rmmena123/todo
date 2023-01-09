import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
}

export function Task({id, content, isCompleted}: TaskProps) {
    return(
        <div className={isCompleted ? styles.taskCompleted : styles.task}>
            {isCompleted ? <CheckCircle size={24} className={styles.checkCircle} /> : <Circle size={24} className={styles.circle}/>}
            <p>{content}</p>
            <Trash size={24} className={styles.trash} />
        </div>
    )
}