import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="font-extrabold ">
          <Link to="/">Home</Link>
        </li>
        <li className="font-extrabold">Shorts</li>
        <li className="font-extrabold">Videos</li>
        <li className="font-extrabold">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>movies</li>
        <li>sports</li>
        <li>gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>music</li>
        <li>movies</li>
        <li>sports</li>
        <li>gaming</li>
      </ul>
    </div>
  );
};

export default SideBar;
