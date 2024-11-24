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
            <label htmlFor="name" id="firstName"></label>
            <input
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              autoComplete="given-name"
              required></input>
          </div>
          <div className="email">
            <label htmlFor="email" id="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              autoComplete="off"
              required></input>
          </div>
          <div className="mobile">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required></input>
          </div>
          <div className="message">
            <label htmlFor="message"></label>
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
