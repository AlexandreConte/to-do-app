import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <label className="flex flex-col px-4 py-2 gap-2 text-white text-lg font-medium w-full md:w-[480px]">{props.label}
        <input {...props}
          className="outline-none bg-blue-900 text-white rounded-md px-4 py-2 focus:bg-blue-950"
        />
      </label>
    </div>
  )
}