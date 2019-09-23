import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <div>
            <h1 className="message">Hello</h1>
            <h1 className="message2">I'm Ginny</h1>
            <h1 className="message3">Web Developer</h1>
            <FontAwesomeIcon className=' icons icon-j' icon={faJsSquare}/>
            <FontAwesomeIcon className=' icons icon-n' icon={faNodeJs}/>
            <FontAwesomeIcon className=' icons icon-r' icon={faReact}/>
        </div>
    )
}
export default Home;