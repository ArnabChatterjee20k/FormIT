import React from "react";

export default function Description({ value, optionalText }) {
  return <p className="text-gray-500">{value ? value : optionalText}</p>;
}
