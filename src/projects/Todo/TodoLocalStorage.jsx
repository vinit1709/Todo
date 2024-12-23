const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem(todoKey);

  if (!rawTodo) return [];
  // parse convert string to array;
  return JSON.parse(rawTodo);
};

// todo add data to local storage.
export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
