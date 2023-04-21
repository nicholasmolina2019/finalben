// components/Dropdown.js
import React from "react";

export default function Dropdown({ options, value, onChange }) {
  const handleChange = (event) => {
    const selectedValues = [...event.target.selectedOptions].map(
      (option) => option.value
    );
    onChange(selectedValues);
  };

  return (
    <select
      multiple
      value={value}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
