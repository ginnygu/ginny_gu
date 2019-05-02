import React from 'react';

function NavBar(props) {
    return (
        <nav className="nav">
            <div className="logo" onClick={props.ToTop}>
                <img src="/mini-logo.png" alt="" />
            </div>
            <div className="nav-selection">
                <div className="hamburger-menu" onClick={props.ToOpen}><span></span><span></span><span></span></div>
                <div className="selection-box">
                    <p className="selection" onClick={props.ToTop}>Home</p>
                    <p className="selection" onClick={props.ToAbout}>About</p>
                    <p className="selection" onClick={props.ToProjects}>Projects</p>
                    <p className="selection" onClick={props.ToContact}>Contact</p>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;