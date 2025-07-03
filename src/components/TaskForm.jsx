import React, { useState } from "react";

// Form to add a new task
function TaskForm({ tasks, setTasks }) {
  // form input states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return; // title ddddd

    // create a new task object
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: desc.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      dueDate,
      tag,
    };

    setTasks([newTask, ...tasks]);

    // reset form
    setTitle("");
    setDesc("");
    setPriority("medium");
    setDueDate("");
    setTag("");
  };

  return (
    <form onSubmit={handleAddTask} className="task-form">
      <input
        type="text"
        placeholder="Task Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <div className="form-row">
        {/* dropdown for priority task*/}
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Due date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      {/* Optional tag field */}
      <input
        type="text"
        placeholder="Tag (e.g. work, personal)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
