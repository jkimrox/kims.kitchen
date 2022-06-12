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
                <div>Search for a Recipe</div>
            </Link>
            <Link className = "nav-link" to="/About">
                <div>About</div>
            </Link>
            <Link className = "nav-link" to="/CreatedRecipes">
                <div>Custom Recipe</div>
            </Link>
            <Link className = "nav-link" to="/NewRecipe">
                <div>Create a Recipe</div>
            </Link>
        </div>
    )
}

export default Nav