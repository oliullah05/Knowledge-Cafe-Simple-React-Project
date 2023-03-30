import React from 'react';

const Blog = (props) => {
    console.log(props.card)
    const {id,img}=props.card;
    
    return (

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="img url problem" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {id}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>y
  </div>
</div>
     
    );
};

export default Blog;