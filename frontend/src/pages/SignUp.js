import React from 'react'
import loginIcon from "../assest/signin.gif";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageTobase64 from '../helpers/imageTobase64';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import SummaryApi from '../common';


function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
  });

  const handelUplodePic = async(event) =>{
    const file = event.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((preve)=>{
      return {
        ...preve,
        profilePic : imagePic
      }
    })
    console.log(imagePic);
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData((currVal)=>{
      return{
        ...currVal,
        [name] : value,
      }
    })
  };

  const [checkPassword, setCheckPassword] = useState(true)

  const handelOnSubmit = async(event) =>{
    const p1 = event.target[2].value;
    const p2 = event.target[3].value;
    setCheckPassword(p1===p2);
    event.preventDefault();
    
    if(p1===p2){
      const dataResponce = await fetch(SummaryApi.signUp.url,{
        method : SummaryApi.signUp.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      const dataApi = dataResponce.json()
      console.log("data",dataApi);
    }
    else{
      console.log('password and confirm password is incorrect')
    }
  }

  const handelOnClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelOnClickShowConfirmPassword = () =>{
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <>
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white py-5 p-2 w-full max-w-md mx-auto rounded-md">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic ? data.profilePic : loginIcon} alt="login-icon" />
            </div>
            <form action="" >
              <label>
                <div className='bg-opacity-75 cursor-pointer text-xs bg-slate-200 py-2 text-center absolute bottom-0 w-full' style={{fontSize: "0.6rem"}}>Uplode Photo</div>
                <input type="file" className='hidden' onChange={handelUplodePic} required/>
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handelOnSubmit}>
          <div className="grid">
              <label htmlFor="name">Name : </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="text"
                  placeholder="Suman Maity"
                  name="name"
                  value={data.name}
                  required
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label htmlFor="email">Email : </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="abc123@gmail.com"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">Password : </label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  name="password"
                  required
                  onChange={handleOnChange}
                  value={data.password}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={handelOnClickShowPassword}
                >
                  <span>
                    {showPassword ? (
                      <FaEye style={{ color: "red" }} />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password">Confirm Password : </label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="******"
                  name="confirmPassword"
                  onChange={handleOnChange}
                  required
                  value={data.confirmPassword}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={handelOnClickShowConfirmPassword}
                >
                  <span>
                    {showConfirmPassword ? (
                      <FaEye style={{ color: "red" }} />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </span>
                </div>
              </div>
            </div>
            {checkPassword ? <p className='flex items-center justify-center' style={{color: "green"}}>Correct Password &nbsp;<FaCheckCircle /></p> : <p className='flex items-center justify-center' style={{color: "red"}}>Confirm Password Not Correct &nbsp; <FaCircleXmark /></p>}
            <button type='submit' className="bg-red-600 text-white px-6 py-1 w-full mt-4   max-w-[150px] rounded-full hover:bg-red-900 hover:scale-105 transition-all mx-auto block">
              Sign-Up
            </button>
          </form>
          <p className="my-4">
            Already Have Accout ?{" "}
            <Link to={"/login"}>
              {" "}
              <span className="hover:text-red-600 hover:underline">
                login
              </span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  </>
  )
}

export default SignUp
