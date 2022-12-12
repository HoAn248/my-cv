import React from 'react'
import './contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Contact() {
    React.useEffect(() => {
        Aos.init({
          duration: 1000,
          delay: 1000,
          once: true
        })
      }, [])
  return (
    <div class="contact" data-aos="fade-up">
            <h2>Contact With Me</h2>
            <div class="contact-about">
                <div class="about" data-aos="fade-right">
                    <div class="thumbnail-contact">
                        <img src="./images/contact.png" alt=""></img>
                    </div>
                    <h3> Phone: <span>+01234567890</span>
                        <div></div>
                    </h3>
                    <h3> Email: <span>hda24082002@gmail.com</span>
                        <div></div>
                    </h3>
                    <div class="find-me">
                        <p>FIND WITH ME</p>
                        <ul>
                            <li>
                                <a href="/">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa-regular fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="form-contact" data-aos="fade-left">

                    <form action="">
                        <div class="name-phone">
                            <div class="name-contact">
                                <label for="name-contact">YOUR NAME</label>
                                <input class="contact-input" id="name-contact" type="text" name="name_contact"></input>
                            </div>
                            <div class="phone-contact">
                                <label for="phone-contact">PHONE NUMBER</label>
                                <input class="contact-input" id="phone-contact" type="text" name="phone_contact"></input>
                            </div>
                        </div>
                        <div class="email-contact">
                            <label for="email-contact">EMAIL</label>
                            <input class="contact-input" id="email-contact" type="text" name="email_contact"></input>
                        </div>
                        <div class="subject-contact">
                            <label for="subject-contact">SUBJECT</label>
                            <input class="contact-input" id="subject-contact" type="text" name="subject_contact"></input>
                        </div>
                        <div class="message-contact">
                            <label for="message-contact">YOUR MESSAGE</label>
                            <input class="contact-input" id="message-contact" type="text" name="message_contact"></input>
                        </div>
                        <button>SEND MESSAGE <i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
  )
}
