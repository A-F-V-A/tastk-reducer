
import { useTask } from '../../hook'
import { ListItem } from '../ListItem'
import { TaskAdd } from '../TasksAdd'


export const TasksReducer = () =>{

    const {
            tasks,
            onNewTask,
            onDeleteTask,
            onToggleTask
    } = useTask()

    return (
        <>
            <h1>Tasks App: {tasks.length}, <small>pendientes: {tasks.filter(f => !f.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        { tasks.map( item => 
                                (
                                    <ListItem 
                                        key={item.id}
                                        task={item}
                                        onDeleteTask = { id => onDeleteTask(id) }
                                        onToggleTask = { onToggleTask }
                                    />
                                )
                            )
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Tasks</h4>
                    <hr />
                    <TaskAdd onNewTask={ task => onNewTask(task) }/>
                </div>
            </div>
        </>
    )
}

