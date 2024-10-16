import { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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

  const handelOnClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white py-5 p-2 w-full max-w-md mx-auto rounded-md">
            <div className="w-20 h-20 mx-auto">
              <img src={loginIcon} alt="login icon" />
            </div>

            <form className="pt-6" onSubmit={handelOnSubmit}>
              <div className="">
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
                    onClick={handelOnClick}
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
                <Link
                  to={"/forgot-password"}
                  className="block w-fit ml-auto hover:underline hover:text-red-600"
                >
                  Forgot Password?
                </Link>
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
  );
};

export default Login;
