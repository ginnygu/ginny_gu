import React from 'react';

function NavBar(props) {
    return (
        <nav className="nav">
            <div className="logo" onClick={()=>props.ToArea('Top')}>
                <img src="/mini-logo.png" alt="" />
            </div>
            <div className="nav-selection">
                <div className="hamburger-menu" onClick={props.ToOpen}><span></span><span></span><span></span></div>
                <div className="selection-box">
                    <p className="selection" onClick={()=>props.ToArea('Top')}>Home</p>
                    <p className="selection" onClick={()=>props.ToArea('About')}>About</p>
                    <p className="selection" onClick={()=>props.ToArea('Projects')}>Projects</p>
                    <p className="selection" onClick={()=>props.ToArea('Contact')}>Contact</p>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;