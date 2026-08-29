import { Edit } from "lucide-react";
import type { taskTypes } from "../../../types/taskTypes";
import ChangeStatusBtn from "../../ui/Buttons/ChangeStausBtn/changeStatusBtn";
import { useTasksFilter } from "./useTasksFilter";

interface ShowTasksProp {
  tasks: taskTypes[];
  toggleStatus: (id: string) => void;
  deliverTask: (editingTask: taskTypes) => void;
}

function ShowTasks({ tasks, toggleStatus, deliverTask }: ShowTasksProp) {
  const { filter, filterButtons, filteredTasks, filterMessages, setFilter } = useTasksFilter(tasks);

  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-semibold text-green-800 md:text-3xl">
        My Tasks
      </h2>

      <div className="overflow-hidden rounded-2xl border border-green-200 bg-white/90 shadow-xl shadow-green-900/10 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 border-b border-green-100 bg-green-50/50 px-4 py-3">
          {filterButtons.map((btn) => (
            <button
              className={`relative cursor-pointer rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === btn.type ? "text-green-700" : "hover:bg-green-100 hover:text-green-800"
              }`}
              onClick={() => setFilter(btn.type)}
            >
              {btn.label}
              {filter === btn.type && (
                <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-green-700" />
              )}
            </button>
          ))}
        </div>
        {filteredTasks?.length === 0 ? (
          <div className="py-12 text-center text-green-400 italic">
            {filterMessages
              .filter((message) => {
                if (message.type === filter) return message.label;
              })
              .map((value) => value.label)}
          </div>
        ) : (
          filteredTasks?.map((task) => (
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
                {/* Update btn start */}
                <button
                  onClick={() => deliverTask(task)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-300 text-green-600 transition-all duration-200 hover:scale-110 hover:cursor-pointer hover:border-green-500 hover:bg-green-50 active:scale-90"
                  title="Update task"
                >
                  <Edit className="w-8" />
                </button>
                {/* Update btn end */}
                <ChangeStatusBtn onClick={() => toggleStatus(task.id)} taskStatus={task.status} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShowTasks;
