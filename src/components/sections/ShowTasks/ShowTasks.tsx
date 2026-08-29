import { Edit } from "lucide-react";
import type { taskTypes } from "../../../types/taskTypes";
import ChangeStatusBtn from "../../ui/Buttons/ChangeStausBtn/changeStatusBtn";

interface ShowTasksProp {
  tasks: taskTypes[];
  toggleStatus: (id: string) => void;
  deliverTask: (editingTask: taskTypes) => void;
}

function ShowTasks({ tasks, toggleStatus, deliverTask }: ShowTasksProp) {
  return (
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
