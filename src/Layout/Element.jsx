import React from "react";
import { GoCheck, GoX } from "react-icons/go";

export default function Element({ children }) {
  return (
    <>
      <div className="card shadow-sm border bg-white text-primary-content">
        <div className="card rounded-b-none w-full bg-success h-3" />
        <div className="card-body">{children}</div>
        <div className="flex self-end px-4 py-2 space-x-4">
          <Button component={<GoCheck className="text-green-600 text-2xl" />} />
          <Button component={<GoX className="text-red-600 text-2xl" />} />
        </div>
      </div>
    </>
  );
}

function Button({ component }) {
  return (
    <button className="btn btn-ghost btn-square shadow-md">{component}</button>
  );
}
