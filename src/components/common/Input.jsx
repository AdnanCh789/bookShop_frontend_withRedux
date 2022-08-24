import React from "react";

const Input = ({ name, label, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label text-muted">
        {label}
      </label>
      <input
        onChange={onChange}
        type="text"
        className="form-control"
        id={name}
        value={value}
      />
    </div>
  );
};

export default Input;
