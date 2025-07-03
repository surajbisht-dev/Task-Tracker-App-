import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import SearchBar from "./components/SearchBar";
import { getTasksFromStorage, saveTasksToStorage } from "./utils/localStorage";
import "./styles/App.css";

function App() {
  // Check if username and email already exist in localStorage
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Load saved tasks from localStorage
  const [tasks, setTasks] = useState(getTasksFromStorage());

  // Task filter state - all, completed, or pending
  const [filter, setFilter] = useState("all");

  // For searching tasks
  const [searchTerm, setSearchTerm] = useState("");

  //  dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  // Filter tasks based on filter
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "all" ||
      (filter === "completed" ? task.completed : !task.completed);
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    localStorage.removeItem("taskList"); //clear saved tasks
    setUsername("");
    setEmail("");
    setTasks([]); // clear task state
  };

  //  login form
  if (!username) {
    return (
      <Login
        onLogin={(name) => {
          setUsername(name);
          setEmail(localStorage.getItem("useremail")); // set email after login
        }}
      />
    );
  }

  //  dashboard with all features
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="dashboard-header">
        {/* Logo + welcome text */}
        <div className="logo-area">
          <h1>Welcome, {username}</h1>
          <p style={{ fontSize: "0.9rem", color: "gray" }}>{email}</p>
        </div>

        {/* Logout and dark mode  */}
        <div className="header-controls">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Search input */}
      <SearchBar value={searchTerm} onSearch={setSearchTerm} />

      {/* Add task form */}
      <TaskForm tasks={tasks} setTasks={setTasks} />

      {/* Filter : All / Completed / Pending */}
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />

      {/* Show task list */}
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
