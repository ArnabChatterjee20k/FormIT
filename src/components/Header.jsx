import React, { useState } from "react";
export default function Header({ value, optionalText }) {
  const [editable, setEditable] = useState(false);
  const text = value ? value : optionalText;

  if (editable)
    return (
      <input
        className="text-black text-xl font-bold border border-success border-x-0 border-t-0 outline-transparent"
        defaultValue={text}
        onBlur={() => setEditable(false)}
      />
    );
  return (
    <h2
      className="card-title text-black font-bold"
      onClick={() => setEditable(true)}
    >
      {text}
    </h2>
  );
}
