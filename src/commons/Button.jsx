import React from "react";

export default function Button({ className = "", variant, children, onClick }) {
  const btnStyle = {
    variant: {
      primary: " border border-purple  bg-purple text-white hover:scale-[1.1] ",
      secondary:
        " border  bg-white text-purple hover:bg-purple hover:text-white  ",

      outline:
        " border border-white text-white  hover:bg-white hover:text-purple  ",
    },
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      delete: "bg-light-grey    text-grey ",

      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };
  return (
    <button
      onClick={onClick}
      className={`${
        variant && btnStyle.variant[variant]
      } px-4 py-2 rounded-md transition-all duration-150  ${className}`}
    >
      {children}
    </button>
  );
}
