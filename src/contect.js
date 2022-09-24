import React from 'react';
import Phone from './image/phone.gif';
import Address from './image/place.gif';
import Gmail from './image/gmail-logo.gif'



class Contect extends React.Component{
    render(){
        return(
            <div className='contect-outer'>
                 <h1>Contect-Info</h1>
                        <p className='para'>Thank You For Viewing My Profile.<br/>I Really Hope You've Enjoyed Looking At My Work...!!</p>
                        <div className='contect-container'>
                    <div className='contect-inner'>
                            <div className='contect-content'>
                                <div className='contect-img'>
                                    <img src={Phone} alt='Phone'></img>
                                </div>
                                <div className='contect-details'>
                                    <p>+91-9159733958</p>
                                </div>
                            </div>
                            <div className='contect-content'>
                                <div className='contect-img'>
                                    <img src={Gmail} alt='Gmail'></img>
                                </div>
                                <div className='contect-details'>
                                    <a href='jagatheeswaranmarimuthu01@gmail.com'>jagatheeswaranmarimuthu01@gmail.com</a>
                                </div>
                            </div>
                            <div className='contect-content'>
                                <div className='contect-img'>
                                    <img src={Address} alt='Address'></img>
                                </div>
                                <div className='contect-details'>
                                    <p>4/22-16, Sri Sendhurnagar,<br/>Elayirampannai-626201,<br/>TamilNadu</p>
                                </div>
                            </div>
                    </div>
                    </div>
            </div>
        )
    }
}
 
export default Contect;