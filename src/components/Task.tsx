import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    isCompleted?: boolean;
}

export function Task({isCompleted}: TaskProps) {
    return(
        <div className={isCompleted ? styles.taskCompleted : styles.task}>
            {isCompleted ? <CheckCircle size={24} className={styles.checkCircle} /> : <Circle size={24} className={styles.circle}/>}
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Duis vel sed fames integer.</p>
            <Trash size={24} className={styles.trash} />
        </div>
    )
}