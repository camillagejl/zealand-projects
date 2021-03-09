import {Link} from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css"

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/lemonade-stand">Lemonade Stand</Link>
                </li>
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>
            </ul>
        </nav>
    )
}