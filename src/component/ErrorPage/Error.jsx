import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-full min-h-screen secondary flex flex-col items-center justify-center gap-2'>
               <title>Error</title>
            <img className='w-96 h-96 rounded-2xl shadow' src="https://i.ibb.co/DDy4wL6c/images-1.jpg" alt="" />
            <h1 className='text-2xl font-bold italic '>
                
                Oops! Food not found
            </h1>

            <Link className='btn border-none primary text-white text-sm font-bold' to={'/'}>Back To Home</Link>
        </div>
    );
};

export default Error;