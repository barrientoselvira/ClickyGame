import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
<ul className="nav nav-pills nav-fill">
    <li className="nav-item">
    <h1>Tarot Clicky Game </h1>
    </li>
    <li className="nav-item">
    <h1>You Guessed  {props.theAnswer}</h1>
    </li>
    <li className="nav-item">
    <h1>Score: {props.score} | Top Score: {props.topScore}</h1>
    </li>
</ul>
);


export default Navbar;