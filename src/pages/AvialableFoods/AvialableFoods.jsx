import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";
import AvailableFood from "./AvailableFood";

const AvialableFoods = () => {
  const featuredFoods = useLoaderData();
    // const [searchText,setSearchText]=useState("")
  const [allFoods,setAllFoods]=useState(featuredFoods)
  const [column,setColumn]=useState(false)
  
  

  const handleSearch=(e)=>{
    e.preventDefault()
    const search=e.target.search.value;
    
    const searchResult=featuredFoods.filter(food=>food.foodName.toLowerCase().includes(search.toLocaleLowerCase()))
    setAllFoods(searchResult)
  }

  




  return (
    <div className="py-32 w-full secondary">
      <title>sharebite || available foods</title>

      <div className="text-color text-center">
        <h1 className="text-3xl font-bold mb-3">Available Foods</h1>
        <p className="text-sm font-bold">
          Browse all the shared meals that are up for grabs. Claims your portion
          before it's gone - help reduce food waste and support your community!
        </p>

        <div className="responsive my-10">
          <form  onSubmit={handleSearch} className="flex items-center justify-center">
            <input className="bg-white p-2 rounded-l-md" type="search" name='search' placeholder="Search food here..."/><button className="p-3 cursor-pointer rounded-r-md  border-l bg-white"><FaSearch></FaSearch></button>
          </form>

          <div className="text-center py-5 hidden lg:flex items-center justify-center">
            <button onClick={()=>setColumn(!column)} className="btn">{column?"Four Column":"Tree Column"}</button>
          </div>

          {
            allFoods.length>0
            ?
            (
            <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:${column?'grid-cols-3 ':'grid-cols-4'}`}>

                {
                    allFoods.map(allfood=><AvailableFood key={allfood._id} allfood={allfood}></AvailableFood>)
                }

            </div>
        )
            :
            (
                <p className="text-xl font-bold">Food Name Not Found</p>
            )
          }
           
        </div>
        
      </div>
    </div>
  );
};

export default AvialableFoods;
