import Input from "../ui/input/Input";
import type { taskTypes } from "../../types/taskTypes";
import type React from "react";
import AddTaskBtn from "../ui/Buttons/addTaskBtn/addTaskBtn";

interface AddTaskProp {
  task: taskTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddBtn: () => void;
}

function AddTask({ task, handleChange, handleClickAddBtn }: AddTaskProp) {
  const { task: taskInp, date } = task;
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
            handleClickAddBtn();
          }}
          name="Add Task"
        />
      </div>
    </div>
  );
}

export default AddTask;
