import React from "react"
import {Link} from "react-router-dom"
import "../nav.css"


const Nav = (props) => {
    return (
        <div className = "nav">
            {/* creates an a tag, creates nav link */}
            <Link className = "nav-link" to="/">
                <div>Home</div>
            </Link>
            <Link className = "nav-link" to="/Search">
                <div>Search for a Dish</div>
            </Link>
            <Link className = "nav-link" to="/CreatedRecipes">
                <div>Family Dishes</div>
            </Link>
            <Link className = "nav-link" to="/NewRecipe">
                <div>Create a Dish</div>
            </Link>
            <Link className = "nav-link" to="/About">
                <div>About</div>
            </Link>
        </div>
    )
}

export default Nav