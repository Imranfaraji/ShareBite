import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { LuQuote } from "react-icons/lu";

const Review = ({rev}) => {
    const {review,rating,photo,name}=rev
    return (
        <div className='bg-white rounded-md shadow p-4'>
            <div className='flex justify-end py-4'>
                
                <LuQuote className='w-7 opacity-20 h-7'></LuQuote>

            </div>
        <h1 className='text-center font-bold text-sm italic'>{review}</h1>

        <div className='py-4 items-center justify-center space-x-1 flex'>

              {[1,2,3,4,5].map(star=>(
                star<=rating ?(<FaStar className='text-blue-500'></FaStar>):(<FaRegStar className='text-blue-300'></FaRegStar>)
              ))}

        </div>

        <div className='flex items-center gap-2 mt-4'>
             <img src={photo} alt="photo" className='w-15 h-15 rounded-full border border-green-400'/>

             <div className=''>
                <h1 className='text-sm font-semibold'>{name}</h1>
                <p className='text-sm text-green-500'>Donor</p>
             </div>
        </div>
        </div>
    );
};

export default Review;