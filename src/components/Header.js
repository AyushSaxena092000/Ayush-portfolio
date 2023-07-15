import React from 'react';
import { Link } from "react-scroll";
import ayushlogo from '../assets/Ayushdone.png';
const Header = () => {
  return (
    <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img style={{ width: '150px', height: 'auto' }} src={ayushlogo} alt=''/>
        </a>
        <Link to="contact">
        <button className='btn btn-sm'>Work with me</button>
        </Link>
      </div>
    </div>
    </header>
 
  )
};

export default Header;
