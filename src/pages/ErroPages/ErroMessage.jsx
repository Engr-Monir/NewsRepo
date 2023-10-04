import React from 'react';
import Error from '../../assets/404 page.jpg'
const ErroMessage = () => {
    return (
        <div className=''>
            <img className='h-[72vh] mx-auto  mt-10' src={Error} alt="404 page" />
            
        </div>
    );
};

export default ErroMessage;