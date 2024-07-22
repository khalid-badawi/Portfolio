import React, { useRef } from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <div></div>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="flex icons"></div>
      </nav>
    </header>
  );
}
