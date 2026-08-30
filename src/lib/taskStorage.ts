import type { taskTypes } from "../types/taskTypes";

const STORAGE_KEY = "tasks";

export const getTasks = (): taskTypes[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks: taskTypes[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
