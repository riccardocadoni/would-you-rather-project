import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ flexDirection: "raw" }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Leaderboard</button>
    </div>
  );
};

export default NavBar;
