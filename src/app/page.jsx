import React from 'react';
import myImage from './vercel.svg';

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '50px', textAlign: 'center' }}>
        Home Page
      </h1>

      <hr />

      <input type="text" />

      <button className='p-3 rounded-md bg-blue-500 text-white'>Learn More</button>

      <img src="/vercel.svg" alt="" />

      <img src={myImage.src} alt="" />

    </div>
  )
}

export default Home;