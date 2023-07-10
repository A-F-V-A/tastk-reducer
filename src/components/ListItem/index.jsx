
export const ListItem = ({task,onDeleteTask,onToggleTask}) =>{
    const {id,description,done} = task
    return (
        <li
            className={`list-group-item d-flex justify-content-between   ${done? 'text-decoration-line-through' : ''}`}> 
            <span 
                onClick={() => onToggleTask(id)}
                className="align-self-center">
                    {description}
            </span>
            <button 
                onClick={ () => onDeleteTask(id)}
                className="btn btn-danger">
                    delete
            </button>
        </li>
    )

}