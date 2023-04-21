import React from 'react';
import './header.css';
import './headerResponsive.css';


export default function Header() {
    const headerRef = React.useRef()
    const btnMenuRef = React.useRef()
    const btnCloseRef = React.useRef()
    const navMenuRef = React.useRef()
    const blockCloseRef = React.useRef()



    React.useEffect(() => {
        let headerElement = headerRef.current
        let btnMenu = btnMenuRef.current
        let btnClose = btnCloseRef.current
        let navMenu = navMenuRef.current
        let blockClose = blockCloseRef.current
        window.addEventListener('scroll', () => {
            headerElement.classList.toggle('header-scroll', window.scrollY > 390)
        })
        btnMenu.addEventListener('click', () => {
            navMenu.className = 'menu-active'
            blockClose.className = 'active-block'
        })

        btnClose.addEventListener('click', () => {
            navMenu.className = ''
            blockClose.className = ''
        })

        blockClose.addEventListener('click', () => {
            btnClose.click();
        })

        let pages = document.querySelectorAll('nav ul li a')
        
        pages.forEach(page => {
            page.onclick = (e)=>{
                pages.forEach(j =>{
                    j.className = ""
                })
                e.target.className = "active-page"
            }
        })
    }, [])

    return (
        <header ref={headerRef}>
            <div className="avt">
                <img src="./images/avatar.png" alt=""></img>
            </div>
            <nav ref={navMenuRef}>
                <ul >

                    <li>
                        <a href='#home' className='active-page'>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href='#contact' data-bs-toggle='tab'>
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <a href='#resume' >
                            RESUME
                        </a>
                    </li>
                    <li>
                        <a href='#projects' >
                            PROJECTS
                        </a>
                    </li>
                    <li><i ref={btnCloseRef} id='btn-close' className="fa-solid fa-xmark"></i></li>
                </ul>
            </nav>
            <i id='btn-menu' ref={btnMenuRef} className="fa-solid fa-bars"></i>
            <div id='block' ref={blockCloseRef}></div>
        </header>
    )
}