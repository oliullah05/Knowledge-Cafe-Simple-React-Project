import React from 'react';

const Qna = () => {
    return (
<div className='container mx-auto '>
<div>
            <h1 className='text-3xl my-3 font-bold '>Deference between Props vs state?</h1>
            <p className=''>Props is used for passing by one component to another component . On the other hand useState used for managing data within a component . props are unchangeable but useState is changeable. props are read only but useState can be updated and state will re-render with the new data</p>
 </div>
        <div>
            <h1 className='text-3xl my-3 font-bold '>What is the purpose of useEffect other than fetching data?</h1>
            <p>UseEffect is react hook that do many work more than data fetching . UseEffect takes two perametter , the first perametter is a callback function and secound perametter is  is an optional array of dependencies that determine when the effect should be run. We can use this dependencies arrey and make lot of thing in useEffect . For example , I can write a funtion which should call every re render.Also i want run a spicify function when a condition match . In That case we can be use useEffect . Also we can run a function when a state is changed by using useEffect . UseEffect also used for get data in local strorage/sesson strorage. </p>
  </div>

        <div>
            <h1 className='text-3xl my-3 font-bold '>How does useState work?</h1>
            <p>UseState is react hook that can change a state in functional component. The useState hook can be used for string, number, boolean, array, object. It takes initial value as it's argument and returns an array with two elements , first one is the store current value and second one is a function, its used for updating the current value. We can call second function as many times and state will be changed every time and we will get new value in state. That's the process of useState work. </p>

   </div>
        <div>
            <h1 className='text-3xl my-3 font-bold '>How Does React work?</h1>
            <p>React is popular javascript library that used for making user interface for mobile and web application development. React created by facebook in 2013. React is very powerful library that contains a collection of JavaScript code and used for user interface building called component . We can divide a site using many component and we can also re use a component in react . we also can add functionality in Element . Its create a virtual dom so that he can track which component is changed and update the specific component/element in the  actual DOM only when necessary. That's make react faster and efficient. That's how react work</p>

            
   </div>
</div>
       
    );
};

export default Qna;