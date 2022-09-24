import React from 'react';
import './index.css';
import Jaga from './image/jaga.jpg'


class About extends React.Component{
    render(){
        return(
            <div className='about-outer'>
                    <div className='about-inner'>
                            <div className='about-img'> 
                                    <img src={Jaga} alt='myphoto'></img>
                            </div>
                            <div className='about-content'>
                                    <h1>ABOUT ME</h1>
                                    <h4>SOFTWARE - DEVELOPER</h4>
                                    <p>HI..., I'am Jagatheeswaran, Completed <br/>Bechelor Of Computer Science(B.sc(cs)) .<br/>I Have Recently Completed for Java Course in <br/>Besant Technologies...!!</p>
                            </div>
                    </div>
            </div>
        )
    }
}


export default About;