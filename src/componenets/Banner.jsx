import React from 'react'
import pic2 from "../../public/pic2.jpg"

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl containermx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
      <div className="space-y-12">
      <h1 className="text-4xl font-bold">
      Welcome to FlySphere  , reach your destination at time
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio assumenda dolores temporibus facilis odio voluptate pariatur inventore quia, unde eius, aperiam ratione aliquid eum fugiat suscipit reiciendis odit hic.
      </p>
      <p className="text-blue-100 text-xl">
        Search your flight easily !!!
      </p>
      <button className="btn btn-primary"><a href="/SearchFlight">Search Flight</a></button>
      </div>
      </div>
      <div className=" order-1 w-full md:w-1/2 flex justify-center items-center">
      <img src={pic2} className="w-80 h-92 rounded-full
    display: black
    margin: auto " alt="" />
      </div>
    </div>
    </>
  )
}

export default Banner