import React, { useState } from "react";
import type { taskTypes } from "./types/taskTypes";
import { useTasksSetter } from "./hooks/useTasksSetter";
import Input from "./components/input/Input";

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

  const { task: taskInp, date } = task;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-green-800 md:text-5xl">Todo SPA</h1>
          <p className="text-lg font-light text-green-600">Stay organized, stay productive</p>
        </header>

        {/* Form */}
        <div className="mb-8 rounded-2xl border border-green-200 bg-white/90 p-6 shadow-xl shadow-green-900/10 backdrop-blur-sm">
          <div className="space-y-4">
            <Input
              inpValue={taskInp}
              label="Task"
              name="task"
              onChange={(e) => onChange(e)}
              placeHolder="What needs to be done?"
            />
            <Input
              label="Date"
              type="date"
              name="date"
              inpValue={date}
              onChange={(e) => onChange(e)}
            />
            <button
              onClick={() => {
                addTask(task);
                setTask({ date: new Date().toLocaleDateString(), task: "", id: "", status: false });
              }}
              className="w-full rounded-xl bg-linear-to-r from-green-600 to-green-500 px-4 py-3 font-semibold tracking-wider text-white uppercase shadow-lg shadow-green-600/30 transition-all duration-200 hover:from-green-700 hover:to-green-600 hover:shadow-green-600/50 active:scale-95"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div>
          <h2 className="mb-4 text-center text-2xl font-semibold text-green-800 md:text-3xl">
            My Tasks
          </h2>

          <div className="overflow-hidden rounded-2xl border border-green-200 bg-white/90 shadow-xl shadow-green-900/10 backdrop-blur-sm">
            {tasks?.length === 0 ? (
              <div className="py-12 text-center text-green-400 italic">
                No tasks yet. Add your first task above!
              </div>
            ) : (
              tasks?.map((task) => (
                <div
                  key={task.id}
                  className="group flex items-center justify-between border-b border-green-100 px-6 py-4 transition-all duration-200 last:border-b-0 hover:bg-green-50/50"
                >
                  <div className="flex-1">
                    <div
                      className={`text-lg text-gray-800 transition-all duration-200 ${
                        task.status ? "line-through opacity-60" : "opacity-100"
                      }`}
                    >
                      {task.task}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm whitespace-nowrap text-gray-500">{task.date}</span>
                    <button
                      onClick={() => toggleStatus(task.id)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110 active:scale-90 ${
                        task.status
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-green-300 text-green-600 hover:border-green-500 hover:bg-green-50"
                      }`}
                    >
                      {task.status ? "✓" : "○"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
