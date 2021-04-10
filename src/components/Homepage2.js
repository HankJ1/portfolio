import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {skills, seeSkills} from './data.js';

const Homepage2 = props => {

    const mySkills = skills;
    const keys = Object.keys(skills);

    useEffect(() => {
        backgroundChange();
        console.log(props);
        console.log(props.location.state);
        console.log(window.location);
        console.log(window.location.pathname);
    }, []);

    const backgroundChange = () => {
        let homepageImage = document.querySelector('.background-image');
        const nums = ['one', 'two', 'three', 'four'];
        if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
              nums.forEach(num => {
                let observer = new IntersectionObserver(entries => {
                    if (entries[0].boundingClientRect.y < 0) {
                      homepageImage.classList.add(`${num}`);
                    } else {
                      homepageImage.classList.remove(`${num}`);
                    }
                  });
                  observer.observe(document.querySelector(`#pixel-anchor-${num}`));
              })
          
          }
    }

    return (
        <div className='total-homepage'>
            <div className='titles-container'>
                <div className='banner-container'>
                    <h1 className="banner-span">Henry Jones</h1>
                    <h3 className='banner-sub'>Full Stack Developer</h3>
                </div>
            </div>
            <div className='skills-header-container'>
                <h4 className='skills-banner'>Skills</h4>
            </div>
            {
                keys.map(key => {
                    return (
                        <div>
                            <div className='skills-title' id={key}>{key.replace('_', ' ')}</div>
                            <div className='skills-flex'>
                            {
                            mySkills[key].map(item => {
                                return (
                                    
                                        <div className='individual-skill'>
                                            <div className='icon-image-container'>
                                                <img src={item.url} className='skill-icon'></img>
                                            </div>
                                            <pre className='skill-name'>{item.title}</pre>
                                        </div>
                                    
                                )
                            })
                            }
                            </div>
                        </div>
                    )
                })
                    
            }
            <div className='anchor' id='pixel-anchor-one'></div>
            <div className='anchor' id='pixel-anchor-two'></div>
            <div className='anchor' id='pixel-anchor-three'></div>
            <div className='anchor' id='pixel-anchor-four'></div>
            <div className='background-image'></div>
        </div>
    )
}

export default Homepage2;