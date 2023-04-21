import React from 'react'
import './contact.css'
import './contactResponsive.css'
import 'aos/dist/aos.css'

export default function Contact() {
  return (
    <div id='contact' className="contact" data-aos="fade-up">
            <h2>Contact With Me</h2>
            <div className="contact-about">
                <div className="about" data-aos="fade-right">
                    <div className="thumbnail-contact">
                        <img src="./images/contact.png" alt=""></img>
                    </div>
                    <h3> Phone: <span>+01234567890</span>
                        <div></div>
                    </h3>
                    <h3> Email: <span>hda24082002@gmail.com</span>
                        <div></div>
                    </h3>
                    <div className="find-me">
                        <p>FIND WITH ME</p>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-regular fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="form-contact" data-aos="fade-left">

                    <form action="">
                        <div className="name-phone">
                            <div className="name-contact">
                                <label htmlFor="name-contact">YOUR NAME</label>
                                <input className="contact-input" id="name-contact" type="text" name="name_contact"></input>
                            </div>
                            <div className="phone-contact">
                                <label htmlFor="phone-contact">PHONE NUMBER</label>
                                <input className="contact-input" id="phone-contact" type="text" name="phone_contact"></input>
                            </div>
                        </div>
                        <div className="email-contact">
                            <label htmlFor="email-contact">EMAIL</label>
                            <input className="contact-input" id="email-contact" type="text" name="email_contact"></input>
                        </div>
                        <div className="subject-contact">
                            <label htmlFor="subject-contact">SUBJECT</label>
                            <input className="contact-input" id="subject-contact" type="text" name="subject_contact"></input>
                        </div>
                        <div className="message-contact">
                            <label htmlFor="message-contact">YOUR MESSAGE</label>
                            <input className="contact-input" id="message-contact" type="text" name="message_contact"></input>
                        </div>
                        <button>SEND MESSAGE <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
  )
}
