import React from 'react'

const Footer = () => {
    const footerStyles = {
        color: "white",
        marginRight: "auto",
        marginLeft: "auto"
    }
    
    return (
        <Footer>
        <nav className="navbar fixed-bottom navbar-light bg-dark" style={footerStyles}>
            <p id = "footer">&#169; copyright 2021</p>
        </nav>
      </Footer>
    )
}

export default Footer
