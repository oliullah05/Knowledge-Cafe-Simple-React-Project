import React, { useState } from 'react';
import bookmark from "../../assets/bookmark.png"
const Blog = (props) => {
  const addReddingTime=props.addReddingTime;
  const {img,name,date,published_date, redding_time,tittle,author_img}=props.card;
    // console.log(props.card)


const [showTittle,setShowTittle] =useState(null);
const tittleShow=(props)=>{
console.log(props);
}




    
    return (

<div className="card w-5/6 bg-base-100 shadow-xl mx-auto my-auto">
  <figure className='mb-5'><img className='w-full ' src={img} alt="img url problem" /></figure>
  <div className="card-body p-0 m-0">
   <section className='flex justify-between'>

   
<div className='flex gap-2'>
<div>
<img className='w-16 h-16 rounded-3xl' src={author_img} alt="" />
</div>

<div className='flex justify-center items-center'>
<div>
<h1>{name}</h1>
<p>{date}({published_date} days ago)</p>
</div>
</div>
</div>


<div className='flex justify-center items-center'>
  <p>{redding_time} min read</p> <img onClick={()=>tittleShow(tittle)} className='w-5 h-5 gap-1' src={bookmark} alt="" srcset="" />
</div>
   </section>
<h1 className='text-2xl font-bold '>{tittle}</h1>

<p onClick={()=>{addReddingTime(props.card)}} className='text-purple-700 underline py-3'>mark as read</p>

{/* onClick={()=>{addReddingTime(props.card)}} */}


  </div>


</div>
     
    );
};

export default Blog;