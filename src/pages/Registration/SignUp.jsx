import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {

  
  const { createUserWithGoogle ,createUser,UpdateUserProfile} = useContext(AuthContext);

  const [errore, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleUserWithGoogle = () => {
    setError("");
    createUserWithGoogle()
      .then(() => {
        toast.success("SignUp successfully!");

        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(errore)
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName=e.target.name.value;
    const photoUrl=e.target.photoUrl.value
       
       setError("")
    const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if(!passregex.test(password)){
      setError('Password muse be at least 6 characters, and include a capital letter , a number and a special characters.')
      return toast.error(errore)
    }


    
      setError("")
    createUser(email,password).then(()=>{
      
      toast.success("SuccessFully signUp!")

      setError('')
      UpdateUserProfile(userName,photoUrl).then(()=>{

      }).catch(error=>{
        setError("User update failed :" 
          +error.message
         )
         toast.error(errore)
      })
      navigate(location?.state || "/");
    }).catch(error=>{
       if(error.code==='auth/email-already-in-use'){
        setError('This email is already register.Please try another email!')
      }else if(error.code==='auth/weak-password'){
        setError('Password is too weak. Please use at least 6 chereacters')
      }else{
        setError(error.message)
        toast.error(errore)
      }
    })
  };

  return (
    <div className={`w-full bg-[#A5D6A7]`}>

      <title>Registration</title>
      <div className="md:w-[60%]  py-15 md:mx-auto w-full flex items-center justify-center">
        <div className="lg:w-1/2 w-11/12 bg-gray-900 p-2  h-[620px] rounded-2xl lg:rounded-none lg:rounded-l-2xl">
          <div className="w-full text-center py-5">
            <h1 className="text-2xl font-extrabold text-white">SignUp Now!</h1>
          </div>
          <form
            onSubmit={handleSignIn}
            className=" flex flex-col gap-3 text-white "
          >
            <label className=" text-sm font-bold text-white">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input text-red-400 text-sm font-medium w-full"
              placeholder="Name"
            />

            <label className=" text-sm font-bold text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input text-red-400 text-sm font-medium w-full"
              placeholder="Email"
            />

            <label className=" text-sm font-bold text-white">Photo Url</label>
            <input
              type="text"
              name="photoUrl"
              required
              className="input text-red-400 text-sm font-medium w-full"
              placeholder="Photo Url"
            />

            <div className="relative">
              <label className="text-sm font-bold text-white">Password</label>
              <input
                required
                name="password"
                type={showPass ? "text" : "password"}
                className="input text-red-600 text-sm font-medium w-full"
                placeholder="Password"
              />

              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute z-50 text-lg text-black p-2 cursor-pointer bg right-2 top-7 "
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>

           

            <button className="btn bg-red-500 text-white border-none w-full mt-4">
              SignUp
            </button>
          </form>
          <div className="py-3 text-center">
            <h1 className="text-xl text-white text-bold">-OR-</h1>
          </div>
          <button
            onClick={handleUserWithGoogle}
            className="btn bg-white w-full text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            SignUp with Google
          </button>

          <p className="text-white mt-3">
            have an aacount?{" "}
            <Link className="text-blue-400 underline" to={"/login"}>
              LogIn
            </Link>
          </p>
        </div>

        <div className="hidden lg:flex bg-[url('https://i.ibb.co/h1x6sGV9/victoria-shes-UC0-HZd-Uit-WY-unsplash.jpg')] w-1/2 h-[620px] rounded-r-2xl bg-cover bg-center bg-norepeat"></div>
      </div>
    </div>
  );
};

export default SignUp;
