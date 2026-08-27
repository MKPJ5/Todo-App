interface AddTaskBtnProp {
  name: string;
  onClick: () => void;
}

function AddTaskBtn({ name, onClick }: AddTaskBtnProp) {
  return (
    <button
      onClick={() => onClick()}
      className="w-full cursor-pointer rounded-xl bg-linear-to-r from-green-600 to-green-500 px-4 py-3 font-semibold tracking-wider text-white uppercase shadow-lg shadow-green-600/30 transition-all duration-200 hover:from-green-700 hover:to-green-600 hover:shadow-green-600/50 active:scale-95"
    >
      {name}
    </button>
  );
}

export default AddTaskBtn;
