import React, { useEffect, useState } from 'react';
import Blog from '../Main/Blog';

const Blogs = () => {
    const [data ,setData]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <>
<section className='container mx-auto flex '>

<div className='basis-2/3  '>
{
    data.map(card=><Blog card={card}></Blog>)
}
</div>
<div className='basis-1/3 '>
    <p className='p-4 mb-4 text-primary-focus border-2 border-error rounded-2xl text-center text-3xl bg-slate-200'>Spent time on read :  min</p>
    <div className='bg-slate-200 h-[800px] rounded-lg '>
   <p className='font-semibold text-2xl p-9'> Bookmarked Blogs :0 </p>
   <div className='text-2xl h-28 rounded-2xl shadow-lg m-2 bg-white'>
    <h1>asdas</h1>
   </div>
   <div className='text-2xl h-28 rounded-2xl shadow-lg m-2 bg-white'>
    <h1>asdas</h1>
   </div>

    </div>
</div>


</section>
        </>
    );
};

export default Blogs;