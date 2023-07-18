import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import logo from './Images/Group.png';
import './style.css';
const Navigation = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (label) => {
    setActiveItem(label);
    // Handle navigation based on label
  };

  const items = [
    {
      label: activeItem || 'English',
      items: [
        {
          label: 'English',
          command: () => handleItemClick('English'),
          className: activeItem === 'English' ? 'active' : '',
        },
        {
          label: 'Spanish',
          command: () => handleItemClick('Spanish'),
          className: activeItem === 'Spanish' ? 'active' : '',
        },
      ],
    },
    {
      label: 'Sign IN',
      className: 'text-red',
    },
  ];
  
  const start = <img alt="logo" src={logo} className="mr-2 logo h-3rem ml-7" ></img>;
  return (
    <div>
      <Menubar className='bg-white-alpha-10 border-none' model={items} start={start}  />
    </div>
  );
};

export default Navigation;
