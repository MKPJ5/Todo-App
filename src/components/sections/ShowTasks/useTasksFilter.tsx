import { useState } from "react";
import type { taskTypes } from "../../../types/taskTypes";

type FilterType = "all" | "complement" | "notComplement";
type FilterBtnType = { type: FilterType; label: string };

export const useTasksFilter = (tasks: taskTypes[]) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filterButtons: FilterBtnType[] = [
    { type: "all", label: "All" },
    { type: "complement", label: "Completed" },
    { type: "notComplement", label: "Not Completed" },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return task;
    if (filter === "complement") return task.status;
    if (filter === "notComplement") return !task.status;
  });

  const filterMessages: FilterBtnType[] = [
    { type: "all", label: "No tasks yet. Add your first task above!" },
    { type: "complement", label: "All tasks are pending or There is no task!" },
    { type: "notComplement", label: "All tasks have been completed or There is no task!" },
  ];
  return { filteredTasks, filterButtons, filter, filterMessages, setFilter };
};
