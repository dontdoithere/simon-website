import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import mail from "../../assets/icons/email.png"
import git from "../../assets/icons/github.png"


function ContactMe() {
  return (
    <section id="contact"className="contact-container">
        <h5>Contact Me</h5>


        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl={mail}
                text="Seeema34l@gmail.com"
                />
                <ContactInfoCard
                iconUrl={git}
                text="https://github.com/dontdoithere"
                />
            </div>
            <div style={{flex: 1}}>
            <ContactForm />
            </div>

        </div>
    </section>    
)
}

export default ContactMe