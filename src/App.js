import React from 'react';
import Heading from './heading';
import Skill from './skill';
import Project from './project';
import About from './about';
import Contect from './contect';
import Footer from './footer';



const App =()=>{
    return(
        <div>
            <React.Fragment>
            <Heading/>
            <div className='space'><Skill/></div>
            <div className='space'><Project/></div>
            <div className='space'><About/></div>
            <div className='space'><Contect/></div>
            <div className='space'><Footer/></div>
            </React.Fragment>
        </div>
        
    )
}

export default App;