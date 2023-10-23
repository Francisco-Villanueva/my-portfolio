import React from "react";

export default function Textarea({ className = "", label }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="block text-dark-grey ml-2 text-gray-400">{label}</label>
      <textarea
        className="bg-purple border rounded-xl px-4 py-2 focus:outline-none"
        rows={4}
      />
    </div>
  );
}
