import React from "react";
import type { taskTypes } from "../../../types/taskTypes";
import Input from "../input/Input";
import { X } from "lucide-react";
import AddTaskBtn from "../Buttons/addTaskBtn/addTaskBtn";

interface EditingWindowProps {
  editingTask: taskTypes;
  onClose: () => void;
  handleEdit: () => void;
  handleInpChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditingWindow({ editingTask, onClose, handleEdit, handleInpChange }: EditingWindowProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-md rounded-2xl border border-green-200 bg-white p-6 shadow-2xl shadow-green-900/20">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-green-800">Edit Task</h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:cursor-pointer hover:bg-green-50 hover:text-green-600"
          >
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <Input
            inpValue={editingTask.task}
            label="Task"
            name="task"
            onChange={(e) => handleInpChange(e)}
            placeHolder="Edit that task you need"
          />

          <Input
            inpValue={editingTask.date}
            label="Date"
            name="date"
            type="date"
            onChange={(e) => handleInpChange(e)}
            placeHolder="Edit that date you need"
          />

          <div className="flex gap-3 pt-2">
            <AddTaskBtn name="Edit" onClick={() => handleEdit()} />
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border-2 border-green-300 bg-white px-4 py-3 font-semibold tracking-wider text-green-700 uppercase shadow-lg shadow-green-900/10 transition-all duration-200 hover:cursor-pointer hover:border-green-400 hover:bg-green-50 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditingWindow;
