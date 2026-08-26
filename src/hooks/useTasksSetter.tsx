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

  return { tasks, setTasks, addTask, toggleStatus };
};

export { useTasksSetter };
