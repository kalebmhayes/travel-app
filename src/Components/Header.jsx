import React from 'react'
import Globe from '../images/globe.svg'

function Header(){
    return(
        <div className='header'>
            <img className='header-img' src={Globe}/>
            <span className='header-title'>Travel Book</span>
        </div>
    )
}

export default Header