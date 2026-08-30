import { useState } from "react";
import type { taskTypes } from "../types/taskTypes";

const useTasksSetter = () => {
  const [tasks, setTasks] = useState<taskTypes[]>([]);
  function addTask(task: taskTypes) {
    const newTask = {
      ...task,
      id: crypto.randomUUID(),
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleStatus(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: !task.status } : task))
    );
  }

  function updateTask(id: string, editedTask: taskTypes) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...editedTask,
              date: `Updated at: ${new Date().toLocaleTimeString()} --- Date: ${editedTask.date}`,
            }
          : task
      )
    );
  }

  return { tasks, addTask, toggleStatus, updateTask };
};

export { useTasksSetter };
