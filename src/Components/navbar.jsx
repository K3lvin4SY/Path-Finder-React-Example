import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pathFinder">Path Finder</Link></li>
        <li><Link to="/slidePuzzle">Slide Puzzle</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;