import React from 'react';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href="/">✕</a></button>
    <h3 className="font-bold text-xl">Login</h3>
    {/*email*/}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your email' className="w-80 px-3 py-1 border rounded-md outline-none "{...register("email", { required: true })}/>
      <br />
      {errors.email && <span  className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter your Password' className="w-80 px-3 py-1 border rounded-md outline-none "{...register("password", { required: true })}/>
      <br />
      {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*button*/}
    <div className='flex justify-around  py-5'>
      <p className='underline text-blue-400 cursor-pointer'>Forgot password ?</p>
      <button className='bg-emerald-700 text-white rounded-md px-3 py-1 hover:bg-emerald-500 duration-300 text-2xl'>Login</button>
      <p>
        Not registered ?<a href="/signup" className='underline text-blue-400 cursor-pointer'>Signup</a>{" "}
      </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  );
}

export default Login