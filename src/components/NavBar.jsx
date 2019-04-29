import React from 'react';

function NavBar(props) {
    return (
        <nav className="nav">
            <div className="logo">
                <img src="/mini-logo.png" alt=""/>
            </div>
            <div className="nav-selection">
                <span className="selection" onClick={props.ToTop}>Home</span>
                <span className="selection" onClick={props.ToAbout}>About</span>
                <span className="selection" onClick={props.ToProjects}>Projects</span>
                <span className="selection" onClick={props.ToContact}>Contact</span>
            </div>
        </nav>
    )
}
export default NavBar;