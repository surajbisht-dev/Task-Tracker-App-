import React from "react";

// SearchBar component - we use it to filter task by title
function SearchBar({ value, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
