import React from "react";

export default function InternalLayout({ className = "", children }) {
  return (
    <div
      className={` h-full   min-h-[] grid place-items-center max-xl:py-6 ${className}`}
    >
      {children}
    </div>
  );
}
