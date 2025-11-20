import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const nagivate = useNavigate();

  const btnclicked = () => {};

  return (
    <div className="bg-cyan-700 py-2 px-5 ">
      <button
        onClick={() => {
          nagivate("/");
        }}
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back to Home
      </button>
      <button
        onClick={() => {
          nagivate(-1);
        }}
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          nagivate(+1);
        }}
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
