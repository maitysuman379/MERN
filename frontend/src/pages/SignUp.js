import React from 'react'
import loginIcon from "../assest/signin.gif";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData((currVal)=>{
      return{
        ...currVal,
        [name] : value
      }
    })
  };

  const handelOnSubmit = (event) =>{
    event.preventDefault();
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
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>

          <form className="pt-6" onSubmit={handelOnSubmit}>
          <div className="grid">
              <label htmlFor="name">Name : </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="text"
                  placeholder="Suman Maity"
                  name="name"
                  value={data.name}
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
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  name="password"
                  onChange={handleOnChange}
                  value={data.password}
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

            <button className="bg-red-600 text-white px-6 py-1 w-full mt-4   max-w-[150px] rounded-full hover:bg-red-900 hover:scale-105 transition-all mx-auto block">
              login
            </button>
          </form>
          <p className="my-4">
            Don't Have Accout ?{" "}
            <Link to={"/sign-up"}>
              {" "}
              <span className="hover:text-red-600 hover:underline">
                Create Account / Sign Up
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
