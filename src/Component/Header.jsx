import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='container mx-auto mb-2'>
            <div className='flex items-center mb-3 p-3 justify-between bg-blue-300 '>
           <h1 className='text-3xl font-bold'>OLi's Knowledge Cafe</h1>
           <div><img className='' src={logo} alt="" /></div>
        </div>
        <hr className='border-2'/>
        </div>
    );
};

export default Header;