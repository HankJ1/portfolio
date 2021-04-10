import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { allProjects } from './data'

const Catalogue = props => {

    const items = allProjects;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='total-catalogue'>
            <div className='section-header'>Projects</div>
                {
                    items.map((el, index) => {
                            return (
                                <div>
         
                                     <Card description={el.description} points={el.points} title={el.title} img_url={el.img_url} category={el.category} key={index} 
                                         live={el.remote_url} repo={el.repository_url}></Card>
                                     
                                </div>
                            )
                    }) 
                }
                <div className='background-image' id='no-homepage'></div>
        </div>
    )
}

const Card = props => {

    return (
            <div className='card-container'>
                <div className='card-image-container'>
                    <div className="button-container">
                        <div className='btn-container'>
                            <a href={`${props.live}`} target="_blank"><button className='code-source-btn'>Live Site</button></a>
                            <a href={`${props.repo}`} target="_blank"><button className='code-source-btn'>Source Code</button></a>
                        </div>
                    </div>
                    <div className="card-title">{props.title}</div>
                    <img src={props.img_url} className="card-image" />
                </div>
                <div className='spacer-container'>
                    <div className='spacer'></div>
                </div>
                <div className="description-container">
                    <div className='card-description'>{props.description}
                        <ul className='points'>
                        {
                            props.points.map((point, index) => {
                                return (
                                    <li className="point-item">{point}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    
                    
                    
                </div>
                
            </div>
    )
}


export default Catalogue;