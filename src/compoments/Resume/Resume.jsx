import React from 'react'
import './resume.css'
import ItemSkills from './ItemSkills'

export default function Resume() {
    const listSkills = [
        {
            name: 'CSS',
            range: 90
        },
        {
            name: 'HTML',
            range: 90
        },
        {
            name: 'JAVASCRIPT',
            range: 95
        },
        {
            name: 'REACTJS',
            range: 85
        },
        {
            name: 'NODEJS',
            range: 80
        },
        {
            name: 'JAVA',
            range: 85
        },
        {
            name: 'PYTHON',
            range: 70
        },
    ]

    React.useEffect(() => {
        let skills = document.querySelector('.skills')
        let listSkills = skills.querySelectorAll('li')
        window.addEventListener('scroll', () => {
            const sectionPos = skills.getBoundingClientRect().top
            const screenPos = window.innerHeight
            
            if (sectionPos < screenPos) {
                listSkills.forEach(progress => {
                    const value = progress.querySelector('.title').dataset.progress
                    progress.querySelector('.range-skill div').style.width = `${value}%`
                })
            }
        })
    })

    return (
        <div id='resume'>
            <h2>My Resume</h2>
            <div className='list-tab'>
                <ul>
                    <li className='acctive-tab'><a href='/'>Education</a></li>
                    <li><a href='/'>Professional Skills</a></li>
                </ul>
            </div>
            <div className='tab'>
                <h2>Dev Skills</h2>
                <div className='skills'>
                    <ul >
                        {listSkills.map((skill, i) => <ItemSkills key={i} skill={skill}></ItemSkills>)}
                        {/* <li>
                            <div className='title'>
                                <span>CSS</span>
                                <p>100%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <span>HTML</span>
                                <p>100%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <span>JAVASCRIPT</span>
                                <p>100%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <span>REACTJS</span>
                                <p>85%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <span>JAVA</span>
                                <p>90%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <span>PYTHON</span>
                                <p>65%</p>
                            </div>
                            <div className='range-skill'>
                                <div></div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>


        </div>
    )
}
