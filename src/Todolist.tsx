import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import Button from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState<string>('')

    const tsarChangeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId)
    }

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const mappedTasks = props.tasks.map(t => {
        return (
            <li key = {t.id}>
                <input type = "checkbox" checked = {t.isDone} />
                <span>{t.title}</span>
                <Button callBack = {() => removeTaskHandler(t.id)} name = 'x' />
            </li>
        )
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value = {title}
                   onKeyPress = {onKeyPressHandler} onChange = {onChangeHandler} />
            <Button callBack = {addTaskHandler} name = '+' />
        </div>
        <ul>
            {mappedTasks}
        </ul>
        <div>
            <Button callBack = {() => tsarChangeFilter('all')} name = 'All' />
            <Button callBack = {() => tsarChangeFilter('active')} name = 'Active' />
            <Button callBack = {() => tsarChangeFilter('completed')} name = 'Completed' />
        </div>
    </div>
}
