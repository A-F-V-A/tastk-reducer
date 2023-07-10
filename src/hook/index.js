import { useState } from "react"

export const tasksReducer = (state = [],action = {}) =>{

    const { type, payload } = action 

    switch(type){
        case '[TASK] Add task':
            return [...state, payload]
        case '[TASK] Remove task':
            return state.filter( task => task.id !== payload)

        case '[TASK] Toggle task':
            return state.map(task => {
                if(task.id === payload){
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task
            })
            
      
        default:
            return state
    }

}

export const useForm = (initialForm = {}) =>{

    const [formState,setFormState] = useState(initialForm)

    const onInputChange = ({ target }) =>{
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]:value
        })
    }

    const onResetForm = () => setFormState(initialForm)

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}

export * from './useTask'