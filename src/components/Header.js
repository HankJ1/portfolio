import React, {useState} from 'react';
import {Link} from 'react-router-dom'



const Header = props => {

    const handleClick = () => {
        if(window.location.pathname != '/portfolio/') {
            setTimeout(() => document.querySelector('#Front_End').scrollIntoView(), 200);
        } else {
            document.querySelector('#Front_End').scrollIntoView();
        }
        console.log('james');
    }

    return (
        <div>
            <div className="header-grid">
                <Link to="/"><div className='head-container' id="logo">HJ</div> </Link>
                <Link to='/projects'><div className='head-container' id='proj'>Projects</div></Link>
                <Link to='/'><div className='head-container' onClick={handleClick} id='proj'>Skills</div></Link>
                <a href="https://drive.google.com/file/d/1OdJvGFuNUJXDf591tcDlify-DQlrOUnL/view?usp=sharing" target="_blank"><div className='head-container'>Resume</div></a>
                <Link to='/about'><div className='head-container'>About</div></Link>
                <Link to='/contact'><div className='head-container'>Contact</div></Link>
            </div>

        </div>
    )
}

export default Header;

