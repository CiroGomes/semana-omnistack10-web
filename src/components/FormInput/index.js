import React from "react";

export default function FormInput({ type, value, label, name, handleChange }) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={e => handleChange(e.target.value)}
        value={value}
        name={name}
        id={name}
        type={type ? type : "text"}
        required
      />
    </div>
  );
}
