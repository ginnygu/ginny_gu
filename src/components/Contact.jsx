import React, { Component }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import emailjs from "emailjs-com";

export default class Contact extends Component {

    constructor(props){
        super(props)

        this.state= {
            email: "",
            message: ""
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
        emailjs.send("default_service", process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, process.env.REACT_APP_EMAILJS_USERID)
    }

    
render(){
    return (
        <div className="contact">
            <h1 className="title">Contact Me</h1>
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="contact-area">
                <label htmlFor="email">Email:</label>
                <input className="text" type="text" id="email" name="email" onChange={this.handleChange}></input>
                </div>
                <div className="text-area contact-area">
                <label htmlFor="message">Message:</label>
                <textarea
                    className="text-input"
                    id="message"
                    name="message"
                    onChange={this.handleChange}
                    placeholder="Enter your message here"
                    required
                />
                </div>
                <div className="btn-group contact-area">
                    <button className="btn btn--cancel" >Cancel</button>
                    <input type="submit" value="Submit" className="btn btn--submit" />
                </div>
            </form>
            <a href="https://www.linkedin.com/in/ginny-gu-tang/"><FontAwesomeIcon className="contact-icon icon-l icons" icon={faLinkedin} /> </a>
            <a href="https://github.com/ginnygu"><FontAwesomeIcon className="contact-icon icon-l icons" icon={faGithubSquare} /></a>
            <a href="mailto:ginnygu@gmail.com"><FontAwesomeIcon className="contact-icon icon-l icons" icon={faEnvelopeSquare}/></a>
        </div>
    )

}

    
}
