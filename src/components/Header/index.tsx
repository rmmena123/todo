import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import ToDoLogo from '../../assets/todo_logo.svg'
import styles from './header.module.css'

interface onAddTaskProps {
    onAddTask: (taskContent: string) => void;
}

export function Header({ onAddTask }: onAddTaskProps) {
    const [content, setContent] = useState("");

    function handleTaskSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(content);
        setContent("");
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={ToDoLogo} alt="Logotipo do ToDo" />

            <form className={styles.insertTask} onSubmit={handleTaskSubmit}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={onChangeContent}
                    value={content}
                />

                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </header>
    )
}