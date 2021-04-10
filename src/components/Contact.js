import React, {useEffect} from 'react';

const Contact = () => {

    return (
        <div className='total-contact'>
            <div className='contact-container'>
                <a href='mailto:joneshenry03@gmail.com'>
                    <div>
                        <h3 className='contact-item'>JonesHenry03@gmail.com</h3>
                        <svg src="images/link-arrow.svg" fill="white" className='link-arrow' width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3328 3.08212C29.3781 1.97848 28.5202 1.04704 27.4166 1.00168L9.43177 0.262619C8.32813 0.217265 7.39669 1.07518 7.35134 2.17881C7.30599 3.28245 8.1639 4.21389 9.26753 4.25925L25.254 4.91619L24.5971 20.9027C24.5517 22.0063 25.4096 22.9378 26.5133 22.9831C27.6169 23.0285 28.5484 22.1706 28.5937 21.0669L29.3328 3.08212ZM3.35495 27.8056L28.6894 4.47109L25.9795 1.52891L0.645046 24.8634L3.35495 27.8056Z"/>
                        </svg>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/henry-jones123/' target="_blank">
                    <div>
                        <h3 className='contact-item'>LinkedIn</h3>
                        <svg src="images/link-arrow.svg" fill="currentColor" className='link-arrow' width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3328 3.08212C29.3781 1.97848 28.5202 1.04704 27.4166 1.00168L9.43177 0.262619C8.32813 0.217265 7.39669 1.07518 7.35134 2.17881C7.30599 3.28245 8.1639 4.21389 9.26753 4.25925L25.254 4.91619L24.5971 20.9027C24.5517 22.0063 25.4096 22.9378 26.5133 22.9831C27.6169 23.0285 28.5484 22.1706 28.5937 21.0669L29.3328 3.08212ZM3.35495 27.8056L28.6894 4.47109L25.9795 1.52891L0.645046 24.8634L3.35495 27.8056Z"/>
                        </svg>
                    </div>
                </a>
                <a href='https://github.com/HankJ1?tab=repositories' target="_blank">
                    <div>
                        <h3 className='contact-item'>GitHub</h3>
                        <svg src="images/link-arrow.svg" fill='white' className='link-arrow' width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3328 3.08212C29.3781 1.97848 28.5202 1.04704 27.4166 1.00168L9.43177 0.262619C8.32813 0.217265 7.39669 1.07518 7.35134 2.17881C7.30599 3.28245 8.1639 4.21389 9.26753 4.25925L25.254 4.91619L24.5971 20.9027C24.5517 22.0063 25.4096 22.9378 26.5133 22.9831C27.6169 23.0285 28.5484 22.1706 28.5937 21.0669L29.3328 3.08212ZM3.35495 27.8056L28.6894 4.47109L25.9795 1.52891L0.645046 24.8634L3.35495 27.8056Z"/>
                        </svg>
                    </div>
                </a>
                <a href="/resume.pdf" target="_blank">
                    <div>
                        <h3 className='contact-item'>Resume</h3>
                        <svg src="images/link-arrow.svg" fill="currentColor" className='link-arrow' width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3328 3.08212C29.3781 1.97848 28.5202 1.04704 27.4166 1.00168L9.43177 0.262619C8.32813 0.217265 7.39669 1.07518 7.35134 2.17881C7.30599 3.28245 8.1639 4.21389 9.26753 4.25925L25.254 4.91619L24.5971 20.9027C24.5517 22.0063 25.4096 22.9378 26.5133 22.9831C27.6169 23.0285 28.5484 22.1706 28.5937 21.0669L29.3328 3.08212ZM3.35495 27.8056L28.6894 4.47109L25.9795 1.52891L0.645046 24.8634L3.35495 27.8056Z"/>
                        </svg>
                    </div>
                </a>
                
                
            </div>
            <div className='background-image' id='no-homepage'></div>
        </div>
    )
}

export default Contact;