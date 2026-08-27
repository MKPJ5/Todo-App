interface ChangeStatusBtnProp {
  onClick: () => void;
  taskStatus: boolean;
}

function ChangeStatusBtn({ taskStatus, onClick }: ChangeStatusBtnProp) {
  return (
    <button
      onClick={() => onClick()}
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110 active:scale-90 ${
        taskStatus
          ? "border-green-500 bg-green-500 text-white"
          : "border-green-300 text-green-600 hover:border-green-500 hover:bg-green-50"
      }`}
    >
      {taskStatus ? "✓" : "○"}
    </button>
  );
}

export default ChangeStatusBtn;
