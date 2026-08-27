import React, { useState } from "react";
import type { taskTypes } from "./types/taskTypes";
import { useTasksSetter } from "./hooks/useTasksSetter";
import ShowTasks from "./components/layout/ShowTasks";
import AddTaskForm from "./components/layout/AddTask";
import Header from "./components/layout/Header";

function App() {
  const { tasks, addTask, toggleStatus } = useTasksSetter();
  const [task, setTask] = useState<taskTypes>({
    id: "",
    task: "",
    date: new Date().toLocaleDateString(),
    status: false,
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setTask((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Header />

        <AddTaskForm
          task={task}
          handleChange={(e) => onChange(e)}
          handleClickAddBtn={() => {
            addTask(task);
            setTask({ date: new Date().toLocaleDateString(), task: "", id: "", status: false });
          }}
        />

        <ShowTasks tasks={tasks} toggleStatus={toggleStatus} />
      </div>
    </div>
  );
}

export default App;
