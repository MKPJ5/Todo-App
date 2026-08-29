import Input from "../../ui/input/Input";
import type { taskTypes } from "../../../types/taskTypes";
import type React from "react";
import AddTaskBtn from "../../ui/Buttons/addTaskBtn/addTaskBtn";
import { useValidation } from "./useValidation";
import { CircleAlert, CircleCheck } from "lucide-react";

interface AddTaskProp {
  task: taskTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddBtn: () => void;
}

function AddTask({ task, handleChange, handleClickAddBtn }: AddTaskProp) {
  const { task: taskInp, date } = task;
  const { errors, isValid } = useValidation(task);

  return (
    <div className="mb-8 rounded-2xl border border-green-200 bg-white/90 p-6 shadow-xl shadow-green-900/10 backdrop-blur-sm">
      <div className="space-y-4">
        <Input
          inpValue={taskInp}
          label="Task"
          name="task"
          onChange={(e) => handleChange(e)}
          placeHolder="What needs to be done?"
        />
        <Input
          label="Date"
          type="date"
          name="date"
          inpValue={date}
          onChange={(e) => handleChange(e)}
        />
        <AddTaskBtn
          onClick={() => {
            if (isValid) handleClickAddBtn();
          }}
          name="Add Task"
        />
        {!isValid ? (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            <div className="flex items-center gap-2">
              <CircleAlert />
              <span>{errors}</span>
            </div>
          </div>
        ) : (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
            <div className="flex items-center gap-2">
              <CircleCheck />
              <span>{errors}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTask;
