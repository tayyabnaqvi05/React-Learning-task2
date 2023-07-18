import React from 'react';
import hero from './Images/hero.png'
import icon from './Images/Create account icon.png'
import Review from './Images/Review.png'
import frame from './Images/Frame 1539.png'
import { Button } from 'primereact/button';
import './style.css';
const Content = () => {   
  return (
    <div className="bg-yellow-50"> 
    <div className="grid ">
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
  
    <div className="col-6 mt-">
          <div className="col-06 fcontainer ml-7 ">
            <img src={icon} alt="icon Content picturee" className='mr-2 mt-3'/>
            <div className='mb-2'><h3 className=''>Create an account</h3>
            <p>You will provide your email address or mobile phone number and create a password.</p>
            </div>
          </div>
          <div className="col-6 fcontainer ml-6 mt-3">
            <img src={Review} alt="icon Content picturee" className='mr-2 mt-3'/>
            <div className='mb-2'><h3 className=''>Review the consent form</h3>
            <p className='pp'>You can review the purpose of the ASH RC Data Hub and the reasons why your participation is important. The consent process takes approximately fifteen minutes, but you can take as much time as you need. </p>
            </div>
          </div>
          <div className="col-6 fcontainer ml-6 mt-7">
            <img src={Review} alt="icon Content picturee" className='mr-2 mt-3'/>
            <div className='mb-2'><h3 className=''>Fill in the consent form</h3>
            <p className='pp'>If you agree to join, you'll be asked to provide your name, date of birth, and electronic signature. You may download your signed consent form at any time. </p>
            </div>
          </div>
          <div className="col-6 fcontainer ml-6 mt-4">
            <img src={Review} alt="icon Content picturee" className='mr-2 mt-3'/>
            <div className='mb-2'><h3 className=''>Access your profile</h3>
            <p className='pp'>Your profile will provide you access to the Data Hub's consent form(s) and educational materials. </p>
            </div>
          </div>
        </div>
    <div className="col-4 ">
    <img src={frame} alt="frame Content picturee" className='imagedem mr-6 mt-8'/>
    </div>
</div>
<div className='flex justify-content-center align-items-center mt-6 bg-yellow-50'>
  <Button label="Join the Data Hub" style={{ backgroundColor: 'var(--primary-main, #B62B30)'}}  /> 
</div>
<div className="">
  
</div>
</div>
  );
};
export default Content;
