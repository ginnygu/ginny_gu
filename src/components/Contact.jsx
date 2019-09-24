import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Contact(){
    return(
        <div className="contact">
            <h1 className='title'>Contact</h1>
            <FontAwesomeIcon className='contact-icon icon-l' icon={faLinkedin}/>
            <FontAwesomeIcon className='contanct-icon icon-l' icon={faGithubSquare}/>
        </div>
    )
}

export default Contact;