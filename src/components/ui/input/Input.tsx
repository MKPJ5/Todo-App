import type React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inpValue: string;
  label: string;
  name: string;
  type?: string;
  placeHolder?: string;
}
export const Input = ({ label, inpValue, name, type, placeHolder, onChange }: Props) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold tracking-wide text-green-700 uppercase">
        {label}
      </label>
      <input
        className="w-full rounded-xl border-2 border-green-200 bg-green-50/50 px-4 py-3 transition-all duration-200 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 focus:outline-none"
        value={inpValue}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
