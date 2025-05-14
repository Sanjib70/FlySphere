import { Plane } from 'lucide-react';
import heroImg from '../assets/pic1.jpg'; // Replace with your actual image path

export default function Banner() {
  return (
    <section className="bg-[#1E232B] text-white py-20 px-8 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2  items-center">
        {/* Left Side */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to <span className="text-blue-400">FlySphere</span>,
            <br />
            reach your destination <span className="text-blue-400">on time</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg max-w-3xl">
            At FlySphere, we are committed to redefining air travel with a perfect blend of
            safety, comfort, and innovation. Serving destinations across the globe, we pride
            ourselves on providing exceptional customer service, on-time performance, and a
            seamless travel experience. Our modern fleet is equipped with state-of-the-art
            technology, and our dedicated crew ensures every journey is smooth and enjoyable.
          </p>
          <p className="text-lg font-medium mb-8">Search your flight easily!</p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white font-semibold">
            <Plane size={20} />
            <a href='/SearchFlight'>Search Flight</a>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Flight Around Globe"
            className="rounded-full w-80 h-80 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
