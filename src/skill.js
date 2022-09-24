import React from 'react';
import Image1 from './image/html.png'
import Image2 from './image/CSS.png'
import Image3 from './image/js.png'
import Image4 from './image/java.png'


const Skill=()=>{

    return(
        <div className='skill-outer'>
            <div className='skill-inner'>
                <div className='Skill'>
                     <h1>skill</h1>
                     <p>This Is My Official Profile Website To <br/>ShowCase,My All Works Related To Web<br/> Development and UI Design...!!</p>
                </div>
                <div className='skill-img'>
                    <img src={Image1} alt='html'></img>
                    <img src={Image2} alt='css' className='css'></img>
                    <img src={Image3} alt='js'></img>
                    <img src={Image4} alt='Java'></img>
                </div>
            </div>
        </div>
    )
}
export default Skill;