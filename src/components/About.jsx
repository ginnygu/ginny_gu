import React from 'react';
import logo from '../../src/logo.svg'

function About() {
    return (
        <div>
            <h1 className='title'>About Me</h1>
            <section className='sections'>
                <img src={logo} className="App-logo"></img>
                <p className= 'about-me'>
                    I'm a Full-Stack Developer with passion for learning. I enjoy creating new websites for small companies and provide support for those intested in web development. Currently at Code Immersives as a Teacher Assistant, providing guidance in Nodejs, Javascript and Reactjs.
                </p>
            </section>
        </div>
    )
}

export default About;   