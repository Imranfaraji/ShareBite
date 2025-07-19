import React from "react";

const FeaturedFood = ({ food }) => {
  const { _id, expiredDate, quantity, foodName, foodImage } = food;
  return (
   <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={foodImage}
      alt="Shoes"
      className="h-90 w-full object-center" />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {foodName}
      <div className="badge badge-secondary">FeaturedFoods</div>
    </h2>
    <p>Notes : {food.notes}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Quantity : {quantity}</div>
      <div className="badge badge-outline">Expired Date: {expiredDate}</div>
    </div>
  </div>
</div>
  );
};

export default FeaturedFood;
