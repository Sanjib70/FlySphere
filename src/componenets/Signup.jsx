import React from 'react';
import { useForm } from "react-hook-form";
import Login from './login';

function Signup() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <>
    <div className='flex h-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500'>
    <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md bg-sky-950">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-xl">Signup</h3>
    {/*name*/}
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" placeholder='Enter your fullname' className="w-80 px-3 py-1 border rounded-md outline-none mr-10"{...register("name", { required: true })}/>
      <br />
      {errors.name && <span  className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*email*/}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your email' className="w-80 px-3 py-1 border rounded-md outline-none mr-10"{...register("email", { required: true })}/>
      <br />
      {errors.email && <span  className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter your Password' className="w-80 px-3 py-1 border rounded-md outline-none mr-10"{...register("password", { required: true })}/>
      <br />
      {errors.password && <span  className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*button*/}
    <div className='flex justify-around  py-5'>
      <button className='bg-emerald-700 text-white rounded-md px-3 py-1 hover:bg-emerald-500 duration-300 text-2xl'>Signup</button>
      <p>
        Have account ?<a href="/" className='underline text-blue-400 cursor-pointer'>Login</a>{" "}
        <Login/>
      </p>
      
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  );
}

export default Signup