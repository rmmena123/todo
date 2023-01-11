import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
    onChangeIsCompleted: (id: string) => void;
}

export function Task({id, content, isCompleted, onChangeIsCompleted}: TaskProps) {
    function handleChangeisCompleted() {
        onChangeIsCompleted(id)
    }

    return(
        <div className={isCompleted ? styles.taskCompleted : styles.task}>
            <button onClick={handleChangeisCompleted} className={styles.buttonCheck}>
                {isCompleted ? <CheckCircle size={24} className={styles.checkCircle}  /> : <Circle size={24} className={styles.circle} />}
            </button>

            <p>{content}</p>
            <Trash size={24} className={styles.trash} />
        </div>
    )
}