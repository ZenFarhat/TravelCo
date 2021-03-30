import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className='Contact' id='contact'>
      <form>
        <h1>Get In Touch.</h1>
        <input type='text' placeholder='Name..' />
        <input type='email' placeholder='Email' />
        <textarea
          name='message'
          cols='30'
          rows='10'
          placeholder='Message...'
        ></textarea>
        <button className='contact__button'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
