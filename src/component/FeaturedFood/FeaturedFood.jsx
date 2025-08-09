import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedFood = ({ food }) => {
  const { _id,   foodName, foodImage } = food;
  return (
   <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={foodImage}
      alt="Shoes"
      className="h-90 w-full object-cover" />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {foodName}
      <div className="badge badge-secondary">FeaturedFoods</div>
    </h2>
    <p>Notes : {food.notes}</p>
    <div className="card-actions flex items-center justify-end">

      <Link className="text-green-700 font-semibold flex items-center justify-center gap-1" to={`/details/${_id}`}>Details <span><FaArrowRight /></span></Link>
      
      
    </div>
  </div>
</div>
  );
};

export default FeaturedFood;
