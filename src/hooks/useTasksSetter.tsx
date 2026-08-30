// hooks/useTasksSetter.ts
import { useState } from "react";
import type { taskTypes } from "../types/taskTypes";
import { getTasks, saveTasks } from "../lib/taskStorage";

const useTasksSetter = () => {
  const [tasks, setTasks] = useState<taskTypes[]>(getTasks());

  function addTask(task: taskTypes) {
    const newTask = {
      ...task,
      id: crypto.randomUUID(),
    };
    setTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  }

  function toggleStatus(id: string) {
    setTasks((prev) => {
      const updatedTasks = prev.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  }

  function updateTask(id: string, editedTask: taskTypes) {
    setTasks((prev) => {
      const updatedTasks = prev.map((task) =>
        task.id === id
          ? {
              ...editedTask,
              date: `Updated at: ${new Date().toLocaleTimeString()} --- Date: ${editedTask.date}`,
            }
          : task
      );
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  }

  return { tasks, addTask, toggleStatus, updateTask };
};

export { useTasksSetter };
