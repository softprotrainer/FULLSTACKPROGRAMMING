import React from 'react';
const TaskList = ({ tasks, onStatusChange }) => {
return (
<div>
<h2>Task List</h2>
<ul>
{tasks.map((task, index) => (
<li key={index} className={task.status.toLowerCase()} onClick={() => onStatusChange(index)}>
{task.description} - {task.project} ({task.status})
</li>
))}
</ul>
</div>
);
};
export default TaskList;