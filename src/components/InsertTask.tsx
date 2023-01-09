import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { Task, TaskProps } from './Task'
import { StatusTask } from './StatusTask'

import styles from './InsertTask.module.css'

const tasksRaw: TaskProps[] = [
    {
        id: String(Math.random()),
        content: "Lavar louças",
        isCompleted: false,
    },
    {
        id: String(Math.random()),
        content: "Lavar roupas",
        isCompleted: true,
    },
];

export function InsertTask() {
    const [tasks, setTasks] = useState<TaskProps[]>(tasksRaw)
    const [newTaskValue, setNewTaskValue] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: String(Math.random),
            content: newTaskValue,
            isCompleted: false
        }

        setTasks([...tasks, newTask])
        setNewTaskValue('')
    }

    return (
        <>
            <form className={styles.insertTask} onSubmit={handleCreateNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} />
                <button type="submit" onSubmit={handleCreateNewTask}>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <StatusTask />

            {
                tasks.map(task => {
                    return <Task id={String(Math.random)} key={task.id} isCompleted={task.isCompleted} content={task.content} />
                })
            }
        </>
    )
}