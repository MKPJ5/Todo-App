import React, { useState } from "react";
import type { taskTypes } from "./types/taskTypes";
import { useTasksSetter } from "./hooks/useTasksSetter";
import ShowTasks from "./components/sections/ShowTasks/ShowTasks";
import AddTaskForm from "./components/sections/AddTask/AddTask";
import Header from "./components/layout/Header/Header";
import EditingWindow from "./components/ui/EditWindow/EditingWindow";

function App() {
  const { tasks, addTask, toggleStatus, updateTask } = useTasksSetter();
  const initialTask: taskTypes = {
    id: "",
    task: "",
    date: new Date().toLocaleDateString(),
    status: false,
  };
  const [editWindow, setEditWindow] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<taskTypes>(initialTask);
  const [task, setTask] = useState<taskTypes>(initialTask);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    setTask((prev) => ({ ...prev, [name]: value }));
  }

  function handleChangeEdit(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    setEditingTask((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdateTask(): void {
    updateTask(editingTask.id, editingTask);
    setEditingTask(initialTask);
    setEditWindow(false);
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Header />

        <AddTaskForm
          task={task}
          handleChange={(e) => handleChange(e)}
          handleClickAddBtn={() => {
            addTask(task);
            setTask({ date: new Date().toLocaleDateString(), task: "", id: "", status: false });
          }}
        />

        <ShowTasks
          tasks={tasks}
          toggleStatus={toggleStatus}
          deliverTask={(editingTask) => {
            setEditingTask(editingTask);
            setEditWindow(true);
          }}
        />

        {editWindow && (
          <EditingWindow
            editingTask={editingTask}
            handleEdit={() => handleUpdateTask()}
            handleInpChange={(e) => handleChangeEdit(e)}
            onClose={() => setEditWindow(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
