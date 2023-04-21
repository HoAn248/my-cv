import React from 'react'

export default function ItemSkills({skill}) {
    return (
        <li>
            <div className='title' data-progress = {skill.range}>
                <span>{skill.name}</span>
                <p>{skill.range}%</p>
            </div>
            <div className='range-skill'>
                <div></div>
            </div>
        </li>
    )
}
