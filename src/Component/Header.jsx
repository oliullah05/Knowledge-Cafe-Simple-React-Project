import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex p-3 justify-between bg-blue-300 container mx-auto'>
           <h1 className='text-3xl font-bold'>OLi's Knowledge CAfe</h1>
           <div><img className='' src={logo} alt="" /></div> 
        </div>
    );
};

export default Header;