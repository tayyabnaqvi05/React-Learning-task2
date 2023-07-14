import React from 'react';
import hero from './hero.png'
import icon from './Create account icon.png'
import Rectangle from './Rectangle 314.png'
import { Button } from 'primereact/button';
import './style.css';
const Content = () => {
   
  return (
    <>
    <div className="grid bg-yellow-50">
    <div className="col-6 ">
    <img src={hero} alt="Hero Content picturee" className='h-30rem w-29rem ml-7 mt-7'/>
    </div>
    <div className="col-6 inline flex-column align-items-start gap-5 mt-8">
      <h3 className='flex flex-column justify-content-center w-30rem text-lg font-bold main text-800'>Welcome to the ASH Research Collaborative Data Hub Participant Portal!</h3>
      <p className='flex flex-column text-lg font-normal w-30rem text-800'>The Data Hub is a program that aims to improve the lives of people with blood diseases by finding better and more effective ways to care for patients. To learn more about the Data Hub, click the button below. </p>
      <Button label="Join the Data Hub" style={{ backgroundColor: 'var(--primary-main, #B62B30)'}} /> 
    </div>
    <div className="col-12 text-center text-5xl font-bold capitalize text-800 mt-4">How does it work?</div>
    <div className="col-12 text-center text-lg font-normal text-700">Here is a quick overview of what steps are involved in joining the Data Hub.</div>
    

    </div>
    <div class="grid">
    <div class="col-1">
    <img src={icon} alt="Hero Content picturee" className='mt-3 ml-7 '/>
    <img src={Rectangle} alt="Hero Content picturee" className='mt-3 ml-8'/>
    </div>
    <div class="col-8">
        <div class="grid">
            <div class="col-6 mainh">
            <h3 className='hh ml-2'>Create an account</h3>
                <p className='hideme ml-2 mb-2'>You will provide your email address or mobile phone number and create a password.</p>
            </div>
                
            </div>
            <div class="col-6">
            sss
            <div class="col-12">
                12
            </div>
        </div>
    </div>
    
</div>
    </>
  );
};
export default Content;
