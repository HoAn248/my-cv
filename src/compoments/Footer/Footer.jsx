import React from 'react'
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Footer() {
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 700,
      once: true
    })
  }, [])
  return (
    <footer data-aos="fade-up">
            <div class="avt">
                <a href="/">
                    <img src="./images/avatar.jpg" alt=""></img>
                </a>
            </div>
            <h3>Ho An</h3>
            <p>© 2022. All rights reserved by...</p>
        </footer>
  )
}
