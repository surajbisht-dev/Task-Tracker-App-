import React from "react";

function TaskFilter({ filter, setFilter, tasks }) {
  // count tasks based on status
  const count = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="filter-bar">
      {/* show all tasks */}
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All ({count.all})
      </button>

      {/* show  completed tasks */}
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed ({count.completed})
      </button>

      {/* show only pending tasks */}
      <button
        onClick={() => setFilter("pending")}
        className={filter === "pending" ? "active" : ""}
      >
        Pending ({count.pending})
      </button>
    </div>
  );
}

export default TaskFilter;
