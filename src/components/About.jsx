import React from 'react'; 

function About() {
    return (
        <div>
            <h1 className='title about-title'>About Me</h1>
            <section className='sections'>
                <p className= 'about-me'>
                    I'm a Full-Stack Developer with passion for learning. I enjoy creating new websites for small companies and provide support for those intested in web development. Currently at Code Immersives as a Teacher Assistant, providing guidance in Nodejs, Javascript and Reactjs.
                </p>
                <p>
                Also love to travel and explore the world,one place at a time.
                </p>
                <img className="travel-photo" src='https://ginsimage.s3.amazonaws.com/IMG_2599.jpg'/>
            </section>
        </div>
    )
}

export default About;   