import React from 'react';
import Images from './image/logo.webp'
import './index.css'
class Heading extends React.Component{
    render(){
    return(
            <><div className='Outer-all'>
            <nav>
                <div className='border'>
                    <h1 className='Name'><span>J</span>agatheeswaran<span>  </span><span>M</span>aimuthu</h1>
                    <h4>(FRONT-END DEVELOPER)</h4>
                </div>
            </nav>
        </div><div className='name-deails-overll'>
                <div className='name-details'>
                    <h1>HEY HAI,</h1>
                    <h1>I'M JAGA</h1>
                    <h1><span className='soft'>FRONT-END</span>-<span className='dev'>DEVELOPER</span></h1>
                </div>
            </div><div className='but-border'>
                <a href='https://drive.google.com/file/d/17DqsojoErf9OrGZD9b05YrbRpzo6BwqB/view?usp=sharing' type='button' className='cv-button'>Download My CV</a>
            </div><div className='background-image'>
                <img src={Images} alt='Backgrounglogo'></img>
            </div></>
    )
    }
}
export default Heading;