import { useState } from "react";
import { BG_HEADER } from "../Utils/constent";

import Header from "./Header";
const Login = () => {

  const [isSignInForm,setIsSignForm] = useState();
   
  const toggelButton = () => {
      setIsSignForm(!isSignInForm);
  }

  return (
    <div className="">
      <Header/>
      <div className="absolute min-h-screen flex flex-col">
        <img src={BG_HEADER}
         alt="background"/>
      </div>
      <form className="absolute p-12 bg-black my-36 mx-auto right-0 left-0 w-3/12 rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-4 font-bold text-white">{isSignInForm ? "Sign in" : "Sign up"}</h1>
        {!isSignInForm &&
          <input type="text"
          placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        }
        <input type="text"
         placeholder="Email" 
         className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

        <input type="password" 
        placeholder="Password" 
        className="p-4 my-1 w-full bg-gray-700 rounded-lg"/>

        {!isSignInForm &&
          <input type="text"
          placeholder="Mobile Number" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        }

        <h2 className="text-white text-sm p-1 my-1">remember me </h2>

        <button className="w-full p-4 my-6 rounded-lg bg-red-600">
        {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <h1 className="text-white text-sm cursor-pointer" onClick = {toggelButton}>{isSignInForm ? "New to netflix! Sign up Now for unlimited fun watch some show or movies" : "Already Registerd Enjoy"}</h1>
      </form>
      
    </div>
  )
}

export default Login;