import React, { useEffect, useState } from 'react';
import Blog from '../Main/Blog';


const Blogs = () => {
   

    const [readdingTime,setReaddingTime]=useState([]);
    const [tittle , setTittle]=useState([]);
    
//    experement start
//   const [clickCount, setClickCount] = useState(1);
const [clickCount, setClickCount] = useState(1);
function ReadClick() {
    setClickCount(clickCount+1);
  }
//   console.log(clickCount)


// 
// 
// 
// 
// 
// 
// 
// 








const HandlerTittle=(props)=>{
const addTittle =[...tittle,props]
setTittle(addTittle);
}


    const addReddingTime=(readTime)=>{
      const readTimeArr =[...readdingTime,readTime]
      setReaddingTime(readTimeArr)
    }
    
    let readTotal = 0;
    for(let time of readdingTime){
        readTotal =readTotal +time.redding_time;    
    }

// console.log(readdingTime);




    const [data ,setData]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    

    return (
        <>
<section className='container mx-auto flex '>

<div className='basis-2/3'>
{
    data.map(card=><Blog clickCount={clickCount} ReadClick={ReadClick} HandlerTittle={HandlerTittle} addReddingTime={addReddingTime} card={card}></Blog>)
}
</div>
<div className='basis-1/3'>
    <p className='p-4 mb-4 text-primary-focus border-2 border-error rounded-2xl text-center text-3xl bg-slate-200'>Spent time on read : {readTotal} min</p>
    <div className='bg-slate-200 h-[800px] rounded-lg '>
   <p className='font-semibold text-2xl p-9'> Bookmarked Blogs :{readdingTime.length} </p>
   

{
    tittle.map(data=><div className='text-2xl h-28 rounded-2xl shadow-lg m-2 bg-white flex justify-center items-center'><p className='text-center'>{data.tittle}</p></div>)
}




  



   {/* {readdingTime.map(() => (
        <div>{time.redding_time}</div>
      ))} */}








    </div>
</div>


</section>
        </>
    );
};

export default Blogs;