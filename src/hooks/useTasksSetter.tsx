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

  return { tasks, setTasks, addTask };
};

export { useTasksSetter };
