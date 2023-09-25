import React from "react";
import '../styles/Contact.css';
import Nav from '../components/Nav';


function Contact() {
    return (
        <div className="Contact">
            <Nav />
            <h1>Contact Me</h1>

            <div className="contact-content">
                <p>Are you seeking a skilled and dedicated full-stack engineer to join your team? Look no further! I specialize in web development, with expertise in both front-end and back-end technologies. If your company is ready to add a passionate and experienced tech professional to the roster, let's connect. Reach out to discuss how I can contribute to your projects and help drive your business forward. I'm excited to explore potential opportunities with your organization.</p>

                <div className='socials'>
                    <a href='https://www.linkedin.com/in/tucker-humiston' target="_blank">
                        <img src={require('../styles/logos/linkedin.png')} alt='linkedin logo'/>
                    </a>    
                    <a href='https://github.com/tuckerhumiston' target="_blank">
                        <img src={require('../styles/logos/github.png')} alt='github logo'/>
                    </a>
                    <a href="mailto: tuckerhumiston@hotmail.com" target="_blank">
                        <img src={require('../styles/logos/email.png')} alt='email logo'/>
                    </a>

                </div>  
            </div>
            <div></div>
        </div>
    )
}

export default Contact;