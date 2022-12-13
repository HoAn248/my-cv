import React from 'react'
import './myProject.css'
import './myProjectResponsive.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Projects() {
    React.useEffect(() => {
        Aos.init({
          duration: 1000,
          delay: 200,
          once: true
        })
      }, [])
  return (
    <div className="my-project">
            <h2 className="title" data-aos="fade-up">My Project</h2>
            <div className="list-projects" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ul className="">
                    <li data-aos="fade-up">
                        <div className="product-img">
                            <img src="./images/project-1.jpg" alt=""></img>
                        </div>
                        <div className="product-type">
                            <p>Development</p>
                            <i className="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span className="product-name">The services provide for design <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div className="product-img">
                            <img src="./images/project-2.jpg" alt=""></img>
                        </div>
                        <div className="product-type">
                            <p>Development</p>
                            <i className="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span className="product-name">The services provide for design <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div className="product-img">
                            <img src="./images/project-3.jpg" alt=""></img>
                        </div>
                        <div className="product-type">
                            <p>Development</p>
                            <i className="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span className="product-name">The services provide for design <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div className="product-img">
                            <img src="./images/project-4.jpg" alt=""></img>
                        </div>
                        <div className="product-type">
                            <p>Development</p>
                            <i className="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span className="product-name">The services provide for design <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                </ul>
            </div>

        </div>
  )
}
