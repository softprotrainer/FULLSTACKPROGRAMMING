import React, { useState } from 'react';
const TaskForm = ({ onAddTask }) => {
const [task, setTask] = useState('');
const [project, setProject] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
if (task.trim() !== '' && project.trim() !== '') {
onAddTask(task, project);
setTask('');
setProject('');

}
};
return (
<div>
<h2>Add New Task</h2>
<form onSubmit={handleSubmit}>
<input
type="text" value={task}
onChange={(e) => setTask(e.target.value)}
placeholder="Enter new task..."
/>
<input
type="text" value={project}
onChange={(e) => setProject(e.target.value)}
placeholder="Enter project name..."
/>
<button type="submit">Add Task</button>
</form>
</div>
);
};
export default TaskForm;