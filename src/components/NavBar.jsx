import React from 'react';

function NavBar(props) {
    return (
        <nav className="nav">
            <div className="logo">
                <img src="/mini-logo.png" alt=""/>
            </div>
            <div className="nav-selection">
                <p className="selection" onClick={props.ToTop}>Home</p>
                <p className="selection" onClick={props.ToAbout}>About</p>
                <p className="selection" onClick={props.ToProjects}>Projects</p>
                <p className="selection" onClick={props.ToContact}>Contact</p>
            </div>
        </nav>
    )
}
export default NavBar;