import React from 'react';
import Projectimg from './image/pro-img.jpg'
import './index.css'

class Project extends React.Component{
    render(){
        return(
            <div className='project-outer'>
                <h1>PROJECT</h1>
                    <div className='project-inner'>
                            <div className='project-content'>
                                        <h1>
                                            Project 1
                                        </h1>
                                        <p>
                                            Rental House Management System(College Project)<br/>
                                            Technologies Used: - Front end: HTML5, CSS3, JavaScript.
                                        </p>
                            </div>
                            <div className='project-img'>
                                        <img src={Projectimg} alt='projectimage'></img>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Project;