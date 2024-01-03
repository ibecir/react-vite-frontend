import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem'
import { useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { ChangeEvent, useEffect, useState } from 'react';
import { addTask } from '../../../../store/taskSlice';
import { useGetBooksQuery } from '../../../../store/bookSlice';

type Props = {}

const TaskList = (props: Props) => {
    const [text, setText] = useState("")
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    const {
        data: books,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetBooksQuery();

    useEffect(() => {
        console.log(books)
    }, [books])

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const addNewTask = () => {
        dispatch(addTask(text))
        setText("")
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task text..." onChange={handleTextChange} value={text} />
                            <button className="btn btn-outline-secondary" type="button" onClick={addNewTask}>Add</button>
                    </div>
                </div>
            </div>
            {
                tasks.map((task, i) => (
                    <TaskItem key={i} task={task} />
                ))
            }
        </>
    )
}

export default TaskList