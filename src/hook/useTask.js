import { useEffect, useReducer } from 'react'
import { tasksReducer } from '.'


const init = () => JSON.parse(localStorage.getItem('task') || '[]')

export const useTask = () =>{

    const [tasks,dispatch] = useReducer(tasksReducer,[],init)

    const onNewTask = (task) =>{
        const action = {
            type: '[TASK] Add task',
            payload: task
        }

        dispatch(action)
    }

    const onDeleteTask = (id) =>{
        dispatch({
            type: '[TASK] Remove task',
            payload: id
        })
    }

    const onToggleTask = (id)  =>{
        dispatch({
            type: '[TASK] Toggle task',
            payload: id
        })
    } 

    
    useEffect(() =>{
        localStorage.setItem('task',JSON.stringify(tasks) || [])
    },[tasks])


    return {
        tasks,
        onNewTask,
        onDeleteTask,
        onToggleTask
    }
}