import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../utils/types";

type TaskState = {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;