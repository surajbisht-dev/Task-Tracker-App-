export const getTasksFromStorage = () => {
  const data = localStorage.getItem("taskList");
  return data ? JSON.parse(data) : [];
};

export const saveTasksToStorage = (tasks) => {
  localStorage.setItem("taskList", JSON.stringify(tasks));
};
