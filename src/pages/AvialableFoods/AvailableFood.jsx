import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router';

const AvailableFood = ({allfood}) => {
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={allfood.foodImage}
      alt="Shoes" 
      className='w-full h-100 object-cover'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{allfood.foodName}</h2>
    <div className='text-start flex items-center justify-between'>
        <p>Notes : {allfood.notes}</p>
        <h1 className='flex items-center gap-2'><FaLocationArrow></FaLocationArrow> {allfood.location}</h1>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${allfood._id}`} className='btn primary border-none text-white'>More Details</Link>
    </div>
  </div>
</div>
    );
};

export default AvailableFood;