import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
        
    </div>
    <div className="card-actions justify-end">
      <Link className="text-green-700 font-semibold flex items-center justify-center gap-1" to={`/details/${allfood._id}`}>Details <span><FaArrowRight /></span></Link>
    </div>
  </div>
</div>
    );
};

export default AvailableFood;