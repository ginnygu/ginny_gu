import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNodeJs, faReact, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <div>
            <h1 className="message">Hello</h1>
            <h1 className="message2">I'm Ginny</h1>
            <h1 className="message3">Web Developer</h1>
            <div className='icon-box'>
                <FontAwesomeIcon className=' icons icon-j' icon={faJsSquare} />
                <FontAwesomeIcon className=' icons icon-n' icon={faNodeJs} />
                <FontAwesomeIcon className=' icons icon-r' icon={faReact} />
                <FontAwesomeIcon className=' icons icon-c' icon={faCss3Alt} />
                <FontAwesomeIcon className=' icons icon-h' icon={faHtml5} />
            </div>
        </div>
    )
}
export default Home;