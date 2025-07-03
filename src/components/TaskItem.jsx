import React, { useState } from "react";

// TaskItem displays one single task
function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  // mark task as complete or not
  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // delete the task with confirmation
  const deleteTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  // save the new title when editing is done >> only edit title
  const saveEdit = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, title: editText } : t))
    );
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""}`}>
      <div>
        {/* checkbox to mark complete */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />

        {/* if editing, show input else show title */}
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <strong>{task.title}</strong>
        )}

        {/* task description */}
        <p>{task.description}</p>

        {/* extra info */}
        <small>
          Priority: {task.priority} | Tag: {task.tag} | Due:{" "}
          {task.dueDate || "N/A"}
        </small>
      </div>

      {/* edit + delete buttons */}
      <div className="task-actions">
        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
