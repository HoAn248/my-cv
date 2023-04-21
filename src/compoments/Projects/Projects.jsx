import React from 'react'
import './myProject.css'
import './myProjectResponsive.css'
import 'aos/dist/aos.css'

export default function Projects() {
    return (
        <div className="my-project" id='projects'>
            <h2 className="title" data-aos="fade-up">My Projects</h2>
            <div className="list-projects" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ul className="">
                    <li >
                        <a href="https://thu-cung.onrender.com" target='_blank' rel='noreferrer'>
                            <div className="product-img">
                                <img src="./images/project-1.png" alt=""></img>
                            </div>
                            <div className="product-type">
                                <p>Make by Ho An</p>
                                <i className="fa-regular fa-heart"><span></span></i>
                            </div>
                            <span className="product-name">Pet management website <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </a>
                    </li>
                    <li >
                        <a href="https://gui-xuan-len-ban.vercel.app" target='_blank' rel='noreferrer'>
                            <div className="product-img">
                                <img src="./images/project-2.png" alt=""></img>
                            </div>
                            <div className="product-type">
                                <p>Make by Ho An + teams BITC FPT</p>
                                <i className="fa-regular fa-heart"><span></span></i>
                            </div>
                            <span className="product-name">Gui Xuan Len Ban <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </a>
                    </li>
                    <li >
                        <a href="https://quoc-thang-fruits-front.vercel.app" target='_blank' rel='noreferrer'>
                            <div className="product-img">
                                <img src="./images/project-3.png" alt=""></img>
                            </div>
                            <div className="product-type">
                                <p>Make by Ho An</p>
                                <i className="fa-regular fa-heart"><span></span></i>
                            </div>
                            <span className="product-name">Fruit inventory management <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </a>
                    </li>
                    <li >
                        <a href="https://hoan248.github.io/Music" target='_blank' rel='noreferrer'>
                            <div className="product-img">
                                <img src="./images/project-4.png" alt=""></img>
                            </div>
                            <div className="product-type">
                                <p>Make by Ho An</p>
                                <i className="fa-regular fa-heart"><span></span></i>
                            </div>
                            <span className="product-name">Bee Music <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </a>
                    </li>
                    <li >
                        <a href="https://hoan248.github.io/Pops" target='_blank' rel='noreferrer'>
                            <div className="product-img">
                                <img src="./images/project-5.png" alt=""></img>
                            </div>
                            <div className="product-type">
                                <p>Make by Ho An</p>
                                <i className="fa-regular fa-heart"><span></span></i>
                            </div>
                            <span className="product-name">Pops UI <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
