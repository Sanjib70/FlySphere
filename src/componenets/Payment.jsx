import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Payment() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [ bookingId , setBookingId] = useState(null);
  const navigate = useNavigate();

  const handleGenerateBookingId = () => {
    const uniqueId = `FLIGHT-${Date.now()}`;  // Example of generating unique ID
    setBookingId(uniqueId);
    console.log("Generated Booking ID:", uniqueId);
    
    // Optionally navigate to the next page and pass the ID
    navigate("/booking-details", { state: { bookingId: uniqueId } });
  };
  
  return (
    <>
    <div>
    <dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href="/FlightBooking">✕</a></button>
    <h3 className="font-bold text-xl">Paymnet</h3>
    {/*email*/}
    <div className='mt-4 space-y-2'>
      <span>Card Number</span>
      <br />
      <input type="text" placeholder='Enter your Card Numner' className="w-80 px-3 py-1 border rounded-md outline-none "{...register("text", { required: true })}/>
      <br />
      {errors.text && <span  className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*Card Date*/}
    <div className='mt-4 space-y-2'>
      <span>Card Validation</span>
      <br />
      <input type="date" placeholder='Enter  the date' className="w-80 px-3 py-1 border rounded-md outline-none "{...register("date", { required: true })}/>
      <br />
      {errors.date && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
      <span>OTP</span>
      <br />
      <input type="password" placeholder='Enter your OTP' className="w-80 px-3 py-1 border rounded-md outline-none "{...register("password", { required: true })}/>
      <br />
      {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>

    {/*button*/}
    <div className='flex justify-around  py-5'>
      <button className='bg-emerald-700 text-white rounded-md px-3 py-1 hover:bg-emerald-500 duration-300 text-2xl' onClick={handleGenerateBookingId}>Pay</button>
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  );
}

export default Payment