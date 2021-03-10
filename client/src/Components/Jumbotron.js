import React from 'react'
import booksPicture from "./books-picture.png"

const Jumbotron = () => {

    const jumboStyles = {
        marginTop: "15px",
        height: "300px",

        jumboText: {
            color: "#40739e",
        }
    }
    return (
        <div className = "col-md-12 jumbotron text-dark bg-light" style={jumboStyles}>
            <h2 style={jumboStyles.jumboText}>(React) Google Books Search</h2>
            <h4 style={jumboStyles.jumboText}>Search for and Save Books of Interest</h4>
            <img src={booksPicture} alt="Books on a Shelf"/>
        </div>
    )
}

export default Jumbotron
