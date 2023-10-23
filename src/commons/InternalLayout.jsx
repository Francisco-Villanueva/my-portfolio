import React from "react";

export default function InternalLayout({ className = "", children }) {
  return (
    <div className={`    min-h-[100vh] grid place-items-center ${className}`}>
      {children}
    </div>
  );
}
