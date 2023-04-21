import './banner.css'
import './bannerResponsive.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import React from 'react';
import TypeIt from "typeit-react";

export default function Banner() {
    React.useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 200,
            once: true
        })

    }, [])


    return (
        <div className="banner" id='home'>
            <div className="content" data-aos="fade-right">
                <p className="subtitle">WELCOME TO MY PROJECTS</p>
                <h1 className="title">Hi, I’m <span className='title-name'>Ho An</span>
                    <br></br><TypeIt
                        options={{
                            loop: true,
                            waitUntilVisible: true,
                        }}
                        getBeforeInit={(instance) => {
                            instance.type("a Developer.").pause(750).delete().pause(500).type("never give up.");
                            return instance;
                        }}
                    />
                </h1>
                <p className="description">I always want to tell everyone that we are just not able to do it yet, not unable to do it. Let's try our best to achieve the goals we set.</p>

                <div className="me-and-skill">
                    <div className="find-me">
                        <p>FIND WITH ME</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100011614929760" target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hoan24082002/" target='_blank' rel='noreferrer'>
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
                    <div className="my-skills">
                        <p>BEST SKILL ON</p>
                        <ul>
                            <li>
                                <a href="https://react.dev/" target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-react"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.javascript.com/" target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-node-js"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.javascript.com/" target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-js"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="thumbnail" data-aos="fade-left">
                <img src="./images/banner.png" alt=""></img>
            </div>
        </div>
    )
}