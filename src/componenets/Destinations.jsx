import londonp from '../assets/pic 3.jpeg';
import tokop from '../assets/pic 4.jpg';
import newyorkImg from '../assets/pic2.jpg';
import dubp from '../assets/pic5.jpg';
import pap from '../assets/pic6.jpeg';
import delp from '../assets/pic7.jpeg';
import Navbar from './Navbar';
const destinations = [
  {
    city: 'New York',
    airport: 'John F. Kennedy International Airport (JFK)',
    country: 'USA',
    image: newyorkImg,
  },
  {
    city: 'London',
    airport: 'Heathrow Airport (LHR)',
    country: 'UK',
    image: londonp,
  },
  {
    city: 'Tokyo',
    airport: 'Haneda Airport (HND)',
    country: 'Japan',
    image: tokop,
  },
  {
    city: 'Dubai',
    airport: 'Dubai International Airport (DXB)',
    country: 'UAE',
    image: dubp,
  },
  {
    city: 'Paris',
    airport: 'Charles de Gaulle Airport (CDG)',
    country: 'France',
    image: pap,
  },
  {
    city: 'Delhi',
    airport: 'Indira Gandhi International Airport (DEL)',
    country: 'India',
    image: delp,
  },
];

function Destinations() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 py-10 px-5 ">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10 mt-16">
        🌐 Explore Our Top Destinations
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={dest.image} alt={dest.city} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{dest.city}, {dest.country}</h2>
              <p className="text-sm text-gray-600 mt-1">{dest.airport}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
              <a href='/SearchFlight'> Book Flight</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Destinations;
