import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-14 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3wNiBujTPOA4Yb-3CEh_rW7eZv8ZbFEj1A&s"
        ></img>
        <img
          className="h-14 mx-4"
          alt="youtube-logo"
          src="https://i.pinimg.com/originals/fd/5a/ac/fd5aac1b2e34d86db1bc40b7792d611f.png"
        ></img>
      </div>
      <div className="col-span-10 px-92 ">
        <input
          className="w-1/2 border border-gray-700 p-2 rounded-l-full"
          type="text"
        />
        <button className=" border border-gray-700  p-2 rounded-r-full px-4 bg-gray-100">
          🔎
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-14"
          src="https://static.thenounproject.com/png/4148245-200.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
