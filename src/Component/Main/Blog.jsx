import React, { useState } from 'react';
import bookmark from "../../assets/bookmark.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = (props) => {
  const [toastClick, setToastClick] = useState(0)
  const clickToast = () => {
    setToastClick(toastClick + 1)
  }













  const [clickCount2, setClickCount2] = useState(0);
  function ReadClick() {
    setClickCount2(clickCount + 1);
  }





  const addReddingTime = props.addReddingTime;
  const HandlerTittle = props.HandlerTittle;

  // const readClickCount =props.clickCount;


  const { img, name, date, published_date, redding_time, tittle, author_img } = props.card;
  // console.log(readClickCount)


  // const [showTittle,setShowTittle] =useState(null);
  // const tittleShow=(props)=>{
  //   setShowTittle(props)
  // }

  const bookmarkCommonFunction = () => {
    clickToast()
    if (toastClick > 0) {
      handleClick()
    }
    ReadClick()
  }


  // console.log(toastClick)

  const [clickCount, setClickCount] = useState(true);

  function handleClick() {
    toast("Alrady Bookmarked!")
    setClickCount(false);
  }
  const style = toastClick >=1? { backgroundColor: 'blue' } : {};
  // console.log(toastClick)


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

              onClick={clickCount2 < 1 ? () => HandlerTittle(props.card) : null}
              //  onClick={()=>{condition ? addReddingTime(props.card) : doSomethingElse()}}
              //  HandlerTittle(props.card)

              className='w-5 h-5 gap-1' src={bookmark} alt="" srcset="" /></span>
          </div>
        </section>
        <h1 className='text-2xl font-bold '>{tittle}</h1>

        <span><p onClick={() => { addReddingTime(props.card) }} className='text-purple-700 underline py-3'>mark as read</p></span>
        {/* <p onClick={()=>{condition ? addReddingTime(props.card) : doSomethingElse()}} className='text-purple-700 underline py-3'>mark as read</p>
 */}
        {/* onClick={()=>{addReddingTime(props.card)}} */}


      </div>

      <ToastContainer />
    </div>

  );
};

export default Blog;