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
        </div>
    )
}

export default Nav