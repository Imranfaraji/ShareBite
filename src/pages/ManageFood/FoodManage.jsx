import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const FoodManage = ({ food, index,setMyFoods,myFoods }) => {
  const { status, expiredDate, foodImage,notes, location,quantity, foodName,_id} = food;

  const handleDelete=(id)=>{
    axios.delete(`https://food-donet-server.vercel.app/foods/${id}`).then(res=>{
        if(res.data.deletedCount){
            toast.success('foode deleted successfully!')
            const remainingFoods=myFoods.filter(myfood=>myfood._id!==id)
            setMyFoods(remainingFoods)
            document.getElementById('my_modal_3').close()
        }
    })
  }

  const handleUpdate=(e,id)=>{
    e.preventDefault()
    const form=e.target;
    const formData=new FormData(form)
    const updateData= Object.fromEntries(formData.entries())
    

    const {quantity,...newData}=updateData
    newData.quantity=parseInt(quantity)
    axios.put(`https://food-donet-server.vercel.app/foods/${id}`,newData)
    .then(res=>{
      if(res.data.modifiedCount){
        toast.success("food Update successfully!")
        document.getElementById(`my_modal_${id}`).close()

      }
    })
  }
  
  return (
    <>
    <tr>
      <th>{index + 1}</th>
      <td>{foodName}</td>
      <td>{foodImage}</td>
      <td>{expiredDate}</td>
      <td>{status}</td>
      <td>
        <button onClick={()=>document.getElementById(`my_modal_${_id}`).showModal()}  className="btn">update</button>
        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn">Delete</button>
    
      </td>

       


    </tr>

    
       {/* for delet  */}

       {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    <p className="py-4">Are you sure you want to delete this food? </p>

    <button onClick={()=>handleDelete(_id)} className="btn">Sure</button>
  </div>
</dialog>


{/* for upadate modal */}
{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id={`my_modal_${_id}`} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update your food</h3>
    <form onSubmit={(e)=>handleUpdate(e,_id)} className="space-y-4">
     
        <input type="text" name='foodName' defaultValue={foodName} placeholder="Food Name"  className="input w-full"/>

        <input type="text" name='foodImage' defaultValue={foodImage} placeholder="Food image"  className="input w-full"/>

        <input type="number" name='quantity' defaultValue={quantity} placeholder="FoodName"  className="input w-full"/>

        <input type="date" name='expiredDate' defaultValue={expiredDate} placeholder="Expired Date"  className="input w-full"/>

        <input type="text" name='location' defaultValue={location} placeholder="Pickup Location"  className="input w-full"/>
        <textarea type="text" name='notes' defaultValue={notes} placeholder="Additional Notes"  className="input w-full"/>

        <button   type="submit" className="btn primary text-white">
            Update
        </button>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    
    </>
  );
};

export default FoodManage;
