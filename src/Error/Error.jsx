import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' bg-black text-white h-screen'>
           <div className='flex flex-col items-center justify-center '>
           <h2 className='text-[60px]'>We’re Sorry</h2>
            <p>
                The page is not available or you’ve put the wrong URL
            </p>
            <img src="https://i.ibb.co/Bs8RrPw/BG-Image-404.png" alt="" />
           <Link to='/'>
           <button className='rounded-md'>Back To Home</button>
           </Link>
           </div>
        </div>
    );
};

export default Error;