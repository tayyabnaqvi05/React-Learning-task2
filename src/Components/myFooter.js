import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './style.css';

const Navfooter = () => {
  const items = [
    {
      label: '© 2021 ASH Research Collaborative',
      
    },
  ];

  const end = (
    <>
      <Button label="About us" className="p-mr-2 p-button-text text-red-500" />
      <Button label="Terms and Conditions" className="p-mr-2 p-button-text text-red-500" />
      <Button label="Help" className="p-mr-2 p-button-text text-red-500" />
    </>
  );

  return (
    <Menubar model={items} end={end} className="custom-navbar border-none  bg-white-alpha-10 footer">
      <Button label="Login" className="p-button-primary" />
    </Menubar>
  );
};

export default Navfooter;
