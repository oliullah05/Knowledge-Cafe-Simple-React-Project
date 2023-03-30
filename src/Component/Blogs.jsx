import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [data ,setData]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <>
{
    data.map(card=><Blog card={card}></Blog>)
}
        </>
    );
};

export default Blogs;