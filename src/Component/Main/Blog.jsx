import React, { useState } from 'react';
import bookmark from "../../assets/bookmark.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';











const Blog = (props) => {
  const addReddingTime=props.addReddingTime;
const HandlerTittle=props.HandlerTittle;
const ReadClick = props.ReadClick;
const readClickCount =props.clickCount;


  const {img,name,date,published_date, redding_time,tittle,author_img}=props.card;
    console.log(readClickCount)


    // const [showTittle,setShowTittle] =useState(null);
    // const tittleShow=(props)=>{
    //   setShowTittle(props)
    // }

const bookmarkCommonFunction=()=>{
  handleClick()
  ReadClick()
}

 
// console.log(ReadClick)
    
    const [clickCount, setClickCount] = useState(1);

    function handleClick() {
      toast("Don't added Two Time's")
      setClickCount(clickCount + 1);
    }
    const style = clickCount%2 === 0 ? { backgroundColor: 'blue' } : {};

    const oli =()=>{
      if (readClickCount) {
        addReddingTime(props.card);
      } else {
        return console.log('object')
      }
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
  <p >{redding_time} min read</p> 
  <span onClick={bookmarkCommonFunction}><img style={style}  
 
 onClick={readClickCount%2===0 ?()=> HandlerTittle(props.card) : null} 
//  onClick={()=>{condition ? addReddingTime(props.card) : doSomethingElse()}}
//  HandlerTittle(props.card)

className='w-5 h-5 gap-1' src={bookmark} alt="" srcset="" /></span>
</div>
   </section>
<h1 className='text-2xl font-bold '>{tittle}</h1>

<span><p onClick={()=>{addReddingTime(props.card)}}className='text-purple-700 underline py-3'>mark as read</p></span>
{/* <p onClick={()=>{condition ? addReddingTime(props.card) : doSomethingElse()}} className='text-purple-700 underline py-3'>mark as read</p>
 */}
{/* onClick={()=>{addReddingTime(props.card)}} */}


  </div>

  <ToastContainer />
</div>
     
    );
};

export default Blog;