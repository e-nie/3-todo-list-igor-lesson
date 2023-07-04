import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

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
    addTask:(newTitle:string)=> void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState<string>('')
    //
    // const onChangeHandler = (e:) => {
    //
    // }

    // const onChangeFilterAll = () => {
    //     props.changeFilter("all")
    // }
    // const onChangeFilterActive = () => {
    //     props.changeFilter("active")
    // }
    // const onChangeFilterCompleted= () => {
    //     props.changeFilter("completed")
    // }
    const tsarChangeFilter = (value:FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = () => {
        props.removeTask(t.id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value = {title} onChange={(e)=> {  setTitle(e.currentTarget.value)
                       }}/>
            <button onClick={(e)=> {props.addTask(title)}}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t =>  {
                    const removeTaskHandler=()=> {
                        props.removeTask(t.id)
                    }
                    return (
               <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ removeTaskHandler(t.id) }>x</button>
                </li>
                    )})
            }
        </ul>
        <div>
            <button onClick={ ()=>tsarChangeFilter('all')} > All </button>
            <button onClick={ ()=>tsarChangeFilter('active') }>  Active </button>
            <button onClick={ ()=>tsarChangeFilter('completed')}> Completed</button>
        </div>
    </div>
}
