import React from 'react';
import moment from 'moment';
import Logo from '../../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center mt-4'>
       <img className='mx-auto' src={Logo} alt="Logo" />
       <p className='text-xl'> Journalism Without Fear or Favour</p>
       <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
       </div>
    );
};

export default Header;