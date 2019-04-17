import React from 'react';

function NavBar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src="/mini-logo.png" alt=""/>
            </div>
            <div className="nav-selection">
                <span className="selection">Home</span>
                <span className="selection">About</span>
                <span className="selection">Portfolio</span>
                <span className="selection">Contact</span>
            </div>
        </nav>
    )
}
export default NavBar;