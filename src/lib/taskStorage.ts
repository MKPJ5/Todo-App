import type { taskTypes } from "../types/taskTypes";
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const STORAGE_KEY = "tasks";

const getTasks = (): taskTypes[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks: taskTypes[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const addTask = (task: taskTypes): taskTypes[] => {
  const tasks = getTasks();
  const updatedTasks = [...tasks, task];
  saveTasks(updatedTasks);
  return updatedTasks;
};

const deleteTask = (id: string): taskTypes[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((t) => t.id !== id);
  saveTasks(updatedTasks);
  return updatedTasks;
};

const updateTask = (updatedTask: taskTypes): taskTypes[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
  saveTasks(updatedTasks);
  return updatedTasks;
};

export { addTask, deleteTask, getTasks, updateTask };
