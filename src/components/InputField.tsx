import React from 'react'
import { FieldError } from 'react-hook-form'

import { UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  type?: string;
  register: UseFormRegister<any>; // Correct typing for `register`
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};


const InputField = ({
  label, 
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-gray-400">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
