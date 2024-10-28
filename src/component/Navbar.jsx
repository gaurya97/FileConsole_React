import React from "react";

export const Navbar = ({ minutes, second }) => {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <img src="https://via.placeholder.com/40" alt="Profile Image" />
          <span>Gaurav Jadhav</span>
        </div>
        <div className="nav-right">
          <a href="#">Add User</a>
          <a href="#">Add File</a>
          <a href="#">Agent Console</a>
          <a href="#">Reports</a>
          <a href="#">Logout</a>
          <div id="timer">
            <span id="minutes">{minutes.toString().padStart(2, 0)}</span>
            <span id="colon">:</span>
            <span id="seconds">{second.toString().padStart(2, 0)}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
