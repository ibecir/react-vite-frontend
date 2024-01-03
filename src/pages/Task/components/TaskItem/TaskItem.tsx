import { useDispatch } from "react-redux"
import { Task } from "../../../../utils/types"
import { deleteTask } from "../../../../store/taskSlice"

type Props = {
    task: Task
}

const TaskItem = ({ task }: Props) => {
    const dispatch = useDispatch()

    return (
        <div className="alert alert-light alert-dismissible fade show" role="alert">
            { task.text }
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => dispatch(deleteTask(task.id))}></button>
        </div>
    )
}

export default TaskItem