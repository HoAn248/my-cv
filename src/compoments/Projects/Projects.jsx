import React from 'react'
import './myProject.css'
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
    <div class="my-project">
            <h2 class="title" data-aos="fade-up">My Project</h2>
            <div class="list-projects" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ul class="">
                    <li data-aos="fade-up">
                        <div class="product-img">
                            <img src="./images/project-1.jpg" alt=""></img>
                        </div>
                        <div class="product-type">
                            <p>Development</p>
                            <i class="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span class="product-name">The services provide for design <i
                                class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div class="product-img">
                            <img src="./images/project-2.jpg" alt=""></img>
                        </div>
                        <div class="product-type">
                            <p>Development</p>
                            <i class="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span class="product-name">The services provide for design <i
                                class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div class="product-img">
                            <img src="./images/project-3.jpg" alt=""></img>
                        </div>
                        <div class="product-type">
                            <p>Development</p>
                            <i class="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span class="product-name">The services provide for design <i
                                class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                    <li data-aos="fade-up">
                        <div class="product-img">
                            <img src="./images/project-4.jpg" alt=""></img>
                        </div>
                        <div class="product-type">
                            <p>Development</p>
                            <i class="fa-regular fa-heart"><span> 600</span></i>
                        </div>
                        <span class="product-name">The services provide for design <i
                                class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </li>
                </ul>
            </div>

        </div>
  )
}
