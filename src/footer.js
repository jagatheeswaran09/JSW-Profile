import React from 'react';
import './index.css'
import Twitter from './image/tw.gif';
import Linkedin from './image/linke.gif';
import Insta from './image/insta.gif';
import Facebook from './image/fb.gif';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-inner'>
                    <div className='footer-img'>
                    <div className='footer-name'>
                        <h1 className='Name1'>Jagatheeswaran Marimuthu</h1>
                        </div>
                        <img src={Twitter} alt='TWITTER'></img>
                        <img src={Linkedin} alt='LINKEDIN'></img>
                        <img src={Insta} alt='INSTA'></img>
                        <img src={Facebook} alt='FACEOOK'></img>
                <div className='Copyright'>
                <p>Copyright © 2022 JSW Profile. All rights reserved</p>
                </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;