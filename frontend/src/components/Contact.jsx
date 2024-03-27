/** @format */

import React from 'react';


function Contact() {
  return (
    <div className="page-wrapper">
      <div className="contact-form">
        <h1 className="fs-600 letter-m">&bull; Get in Touch &bull;</h1>
        <div className="underline-contact"></div>
        <form action="#" method="post" id="contact_form" className="form">
          <div className="name">
            <label for="name"></label>
            <input
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              required></input>
          </div>
          <div className="email">
            <label for="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              required></input>
          </div>
          <div className="mobile">
            <label for="name"></label>
            <input
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required></input>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Submit" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
