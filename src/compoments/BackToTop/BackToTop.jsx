import React from 'react'
import './backToTop.css'
export default function BackToTop() {
    const backTopRef = React.useRef()
    React.useEffect(()=>{
        let backTopElement = backTopRef.current
        
        window.addEventListener('scroll', () => {
            backTopElement.classList.toggle('back-to-top-active', window.scrollY > 400)
        })
        backTopElement.addEventListener('click',()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }) 
    },[])
  return (
    <div ref={backTopRef} className='back-to-top'><i className="fa-solid fa-arrow-up"></i></div>
  )
}
