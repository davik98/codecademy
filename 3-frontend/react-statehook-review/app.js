/*
Let’s review what we learned and practiced in this lesson:

With React, we feed static and dynamic data models to JSX to render a view to the screen.
Hooks are used to “hook into” the internal component state for managing dynamic data in function components.
We employ the State Hook using the code below. The currentState references the current value of the state and initialState initializes the value of the state for the component’s first render.

const [currentState, stateSetter] = useState( initialState );

State setters can be called in event handlers.
We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.
We use a state setter callback function when our next value depends on our previous value.
We use arrays and objects to organize and manage related data that tend to change together.
Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: 
setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev })).
It’s best practice to have multiple, simpler states instead of having one complex state object.
*/
import { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };
    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(
            (task) => task.id !== taskIdToRemove
        ));
    };

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TasksList allTasks={allTasks} handleDelete={handleDelete} />
        </main>
    );
}
