import React from 'react'
import './footer.css'
import 'aos/dist/aos.css'

export default function Footer() {
  return (
    <footer data-aos="fade-up" >
            <div className="avt">
                <a href="/">
                    <img src="./images/avatar.png" alt=""></img>
                </a>
            </div>
            <h3>Ho An</h3>
            <p>© 2022. All rights reserved by...</p>
        </footer>
  )
}
