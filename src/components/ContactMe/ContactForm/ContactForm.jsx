import React from 'react'
import './ContactForm.css'

const ContactForm = ({ }) => {
  return (
    <div className="conact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>
                <div className="mail-container">
                <input type="text" name="email" className="email-input" placeholder="Email" />
                <textarea type="text" name="message" className="message-input" placeholder="Message Me" />
                <button>SEND ME</button>
            </div>
          
        </form>
    </div>

)
}

export default ContactForm