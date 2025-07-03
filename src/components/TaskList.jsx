import React from "react";
import TaskItem from "./TaskItem";

// TaskList shows all tasks passed from parent
function TaskList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      {/* loop through tasks and render each */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
