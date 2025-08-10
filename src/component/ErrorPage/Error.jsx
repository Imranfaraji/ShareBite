import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import Error404 from "../../assets/Animation/Error404.json"

const Error = () => {
    return (
        <div className='w-full min-h-screen secondary flex flex-col items-center justify-center gap-2'>
               <title>Error</title>
            <Lottie animationData={Error404} loop={true}></Lottie>
            <h1 className='text-2xl font-bold italic '>
                
                Oops! Food not found
            </h1>

            <Link className='btn border-none primary text-white text-sm font-bold' to={'/'}>Back To Home</Link>
        </div>
    );
};

export default Error;