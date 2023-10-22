"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/commons/Icons";

export default function Input({
  title,
  placeholder,
  type,
  defaultValue = "",
  className = "",
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  outline,
  size,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div
      className={`relative  ${
        size ? `h-[${size + 2}rem]` : "h-[6rem]"
      }    ${className}`}
    >
      <label className="block text-dark-grey ml-2 text-gray-400">{title}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full ${
          size ? `h-[${size}rem]` : `h-[3rem]`
        } font-montserrat  py-2 rounded-xl ${
          outline && "bg-purple border border-white text-white"
        }  border ${error ? "border-error" : ""} p-4  focus:outline-none`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-5 top-2  h-full flex items-center mr-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-grey " />
          ) : (
            <EyeIcon className="h-5 w-5 text-grey " />
          )}
        </button>
      )}

      {touched && error ? (
        <p className=" ml-4  text-error text-sm  ">{error}</p>
      ) : null}
    </div>
  );
}
