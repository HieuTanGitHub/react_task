import EachTask from "./EachTask"

const Task = ({tasks,onDelete,onToggle}) => {
    
  return (
    <>{tasks.map((task)=> (<EachTask key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}></EachTask>)   )}</>
  )
}

export default Task