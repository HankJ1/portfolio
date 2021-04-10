import React, {useEffect} from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='total-about'>
            <div id='bio-container'>
                <div id='bio-photo-container'>
                    <img src='images/hank-backpack.jpg' id='bio-photo'/>
                </div>
                <div className='spacer-container'>
                    <div id='bio-spacer'></div>
                </div>
                <div id='bio-description-container'>
                    <div id='bio-description'>
                        <p className='bio' id='top-bio'>I graduated from the University of Washington with a degree in Civil Engineering in 2017 and 
                            began work at a stormwater management company. Modeling drainage systems has its own unique set of rewards, but
                            I found that the design work to be too perscriptive and the opportunity for innovation less than exciting. 
                        </p>
                        <p className='bio'>
                            Amidst the engineering design work I always gravitated toward Excel projects. Massaging large amounts of data and building 
                            logical connections between moving parts was the most satisfying part of my role. I taught myself to write scripts with VBA and when I finally decided to leave 
                            my engineering job, I was kept on as an independent contractor to write macros for the company.  
                        </p>
                        <p className='bio' id='bottom-bio'>I decided to make a career out of my favorite part of my civil engineering job so i began taking computer science
                        classes in traditional data structures and algorithms as well as web development. After intensive study I am ready to bring my development
                        knowledge and the technical skills to a fast-paced and challenging work environment. </p>

                    </div>
                    
                </div>
                
            </div>
            <div className='background-image' id='no-homepage'></div>
        </div>
    )
}

export default About;