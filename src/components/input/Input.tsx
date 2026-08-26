import type React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inpValue: string;
  label: string;
  name: string;
}
export const Input = ({ label, inpValue, name, onChange }: Props) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        name={name}
        onChange={(e) => onChange(e)}
        value={inpValue}
        className="rounded-sm bg-green-400 px-2 text-xl font-semibold text-gray-100"
        type="text"
      />
    </label>
  );
};

export default Input;
