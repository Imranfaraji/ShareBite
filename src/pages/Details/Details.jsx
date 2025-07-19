import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useLoaderData } from "react-router";

const Details = () => {
  const food = useLoaderData();
  const {
    status,
    quantity,
    email,
    donnerimage,
    expiredDate,
    location,
    donnerName,
  } = food;
  return (
    <div className="w-full secondary py-16">
      <title>Details</title>

      <div className="responsive">
        <div className=" bg-base-200 rounded-md py-10  ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={food.foodImage}
              className="w-full md:w-96 rounded-lg shadow-2xl"
            />
            <div className="text-start">
              <div className="flex gap-2">
                <h1 className="text-5xl font-bold">{food.foodName}</h1>
              <div className="badge badge-secondary">{status}</div>
              </div>
              <div className="text-start flex flex-col md:flex-row items-center justify-between mt-3">
                <p>Notes : {food.notes}</p>
                <h1 className="flex items-center gap-2">
                  <FaLocationArrow></FaLocationArrow> {location}
                </h1>
              </div>
              <div>
                <div className="card-actions mt-3">
                  <div className="badge badge-outline">
                    Quantity : {quantity}
                  </div>
                  <div className="badge badge-outline">
                    Expired Date: {expiredDate}
                  </div>

                  <div className="w-full border border-accent mt-2"></div>

                  {/* donner information */}

                  <div className="mt-3 flex items-center justify-center gap-4">

                    <img src={donnerimage} alt="" 
                    className="w-15 h-15 rounded-full  border-2 border-green-800"/>
                    <div>

                        <p className="font-bold text-sm">Donner Name : {donnerName}</p>
                        <p className="font-bold text-sm">Donner Email : {email}</p>

                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
