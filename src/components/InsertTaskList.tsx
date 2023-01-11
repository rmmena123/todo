import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import { StatusTask } from './StatusTask'

import styles from './InsertTask.module.css'

interface TaskToInsertProps {
    id: string;
    content: string;
    isCompleted: boolean;
}

export function InsertTaskList() {
    const [tasks, setTasks] = useState<TaskToInsertProps[]>([])
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

    function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskValue(event.target.value)
    }

    function changeIsComplete(id: string) {
        const updatedCheckedTasks = tasks.map(task => {
            if (task.id === id) {
              return {
                ...task,
                isCompleted: !task.isCompleted
              }
            }

            return task
        })

        setTasks(updatedCheckedTasks)
    }

    return (
        <>
            <form className={styles.insertTask} onSubmit={handleCreateNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" value={newTaskValue} onChange={handleChangeText} />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <StatusTask />

            {
                tasks.map(task => {
                    return <Task id={String(Math.random)} key={task.id} isCompleted={task.isCompleted} content={task.content} onChangeIsCompleted={changeIsComplete} />
                })
            }
        </>
    )
}