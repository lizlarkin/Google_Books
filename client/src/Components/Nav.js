import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {

    const navStyles = {
        fontWeight: "bold",

        linkStyles: {
            marginLeft: "75px",
            color: "#40739e",
            textDecoration: "none",
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navStyles}>
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Google Books</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/Search" style={navStyles.linkStyles}>Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Saved" style={navStyles.linkStyles}>Saved</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav
