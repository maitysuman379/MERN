import { useState } from 'react';
import loginIcon from '../assest/signin.gif';
import { FaEye } from "react-icons/fa"; 
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <section id="login">
        <div className='mx-auto container p-4'>
            <div className='bg-white py-5 p-2 w-full max-w-md mx-auto rounded-md'>

                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt="login icon" />
                </div>

                <form action="">

                    <div className=''>
                       <label htmlFor="Email">Email : </label>
                       <div className='bg-slate-200 p-2'>
                          <input type="email" placeholder='abc123@gmail.com' name='Email' className='w-full h-full outline-none bg-transparent'/>
                       </div>
                    </div>

                    <div>
                       <label htmlFor="Password">Password : </label>
                       <div className='bg-slate-200 p-2 flex' >
                           <input type={ showPassword ? 'text' : 'password'} placeholder='******' name='Password' className='w-full h-full outline-none bg-transparent'/>
                           <div className='cursor-pointer'>
                            <span>
                              <FaEye />
                            </span>
                           </div>
                       </div>
                    </div>

                </form>

            </div>
        </div>
      </section>
    </>
  )
}

export default Login
