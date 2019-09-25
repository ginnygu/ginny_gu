import React, { Component }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

export default class Contact extends Component {

    constructor(props){
        super(props)

        this.state= {
            email: '',
            message: ''
        }
     
        
    }
    handleChange = (event) => {
        
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const templateParams = {
            "senderEmail": this.state.email,
            "message": this.state.message
        }
        emailjs.send('default_service', process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, process.env.REACT_APP_EMAILJS_USERID)
    }

    
render(){
    return (
        <div className="contact">
            <h1 className='title'>Contact</h1>
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <h1>Contact Me</h1>
                <label htmlFor="email"></label>
                <input type='text' id='email' name='email' onChange={this.handleChange}></input>
                <textarea
                    className="text-input"
                    id="message"
                    name="message"
                    onChange={this.handleChange}
                    placeholder="Enter your message here"
                    required
                />
                <div className="btn-group">
                    <button className="btn btn--cancel" >Cancel</button>
                    <input type="submit" value="Submit" className="btn btn--submit" />
                </div>
            </form>
            <FontAwesomeIcon className='contact-icon icon-l' icon={faLinkedin} />
            <FontAwesomeIcon className='contanct-icon icon-l' icon={faGithubSquare} />
        </div>
    )

}

    
}
