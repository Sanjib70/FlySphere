import { ArrowRight, Calendar, Map, Plane, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function SearchFlight() {
  const navigate = useNavigate();

  // Trip type state
  const [tripType, setTripType] = useState('oneWay');

  // Form state
  const [formData, setFormData] = useState({
    departure: 'kolkata',
    destination: 'delhi',
    departDate: '',
    returnDate: '',
    passengers: '1',
    cabinClass: 'Economy'
  });

  // Available flights state
  const [availableFlights, setAvailableFlights] = useState([]);
  const [searched, setSearched] = useState(false);

  // Popular destinations
  const popularDestinations = [
    { code: 'BOM', city: 'Mumbai' },
    { code: 'BLR', city: 'Bangalore' },
    { code: 'HYD', city: 'Hyderabad' },
    { code: 'CCU', city: 'Kolkata' }
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle search submission
  const handleSearch = () => {
    // Simulate API call with flights data
    const mockFlights = [
      {
        id: 1,
        airline: 'IndiGo',
        flightNumber: '6E 127',
        departure: '06:00',
        arrival: '08:30',
        duration: '2h 30m',
        price: '₹4,299',
        stops: 'Non-stop',
        amenities: ['Wi-Fi', 'In-flight meals', 'Entertainment'],
        from: formData.departure,
        to: formData.destination,
        departureDate: formData.departDate
      },
      {
        id: 2,
        airline: 'SpiceJet',
        flightNumber: 'SG 256',
        departure: '09:15',
        arrival: '11:45',
        duration: '2h 30m',
        price: '₹4,899',
        stops: 'Non-stop',
        amenities: ['Wi-Fi', 'Extra legroom'],
        from: formData.departure,
        to: formData.destination,
        departureDate: formData.departDate
      },
      {
        id: 3,
        airline: 'Air India',
        flightNumber: 'AI 753',
        departure: '12:30',
        arrival: '15:00',
        duration: '2h 30m',
        price: '₹5,499',
        stops: 'Non-stop',
        amenities: ['Wi-Fi', 'In-flight meals', 'Entertainment', 'Lounge access'],
        from: formData.departure,
        to: formData.destination,
        departureDate: formData.departDate
      },
      {
        id: 4,
        airline: 'Vistara',
        flightNumber: 'UK 819',
        departure: '16:45',
        arrival: '19:15',
        duration: '2h 30m',
        price: '₹5,999',
        stops: 'Non-stop',
        amenities: ['Wi-Fi', 'Premium meals', 'Entertainment', 'Extra legroom'],
        from: formData.departure,
        to: formData.destination,
        departureDate: formData.departDate
      }
    ];

    setAvailableFlights(mockFlights);
    setSearched(true);
  };

  // Handle booking action
  const handleBooking = (selectedFlight) => {
    // Navigate to the FlightBookingPage and pass the selected flight data as state
    navigate('/FlightBooking', { state: { selectedFlight } }); // Changed route name
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Plane className="text-blue-500 mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            FlySphere
          </h1>
        </div>

        {/* Search Panel */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Find Your Flight</h2>

          {/* Trip Type Selection */}
          <div className="flex space-x-4 mb-6">
            <div
              className={`cursor-pointer px-4 py-2 rounded-full ${tripType === 'oneWay' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setTripType('oneWay')}
            >
              One Way
            </div>
            <div
              className={`cursor-pointer px-4 py-2 rounded-full ${tripType === 'roundTrip' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setTripType('roundTrip')}
            >
              Round Trip
            </div>
            <div
              className={`cursor-pointer px-4 py-2 rounded-full ${tripType === 'multiCity' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setTripType('multiCity')}
            >
              Multi-City
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Departure */}
            <div className="relative">
              <label htmlFor="departure" className="block mb-2 text-sm font-medium text-gray-400">Departure</label>
              <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                <span className="p-3 bg-gray-700 text-gray-400">
                  <Map className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="departure"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 focus:outline-none"
                  placeholder="City or Airport"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-400">Destination</label>
              <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                <span className="p-3 bg-gray-700 text-gray-400">
                  <Map className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 focus:outline-none"
                  placeholder="City or Airport"
                />
              </div>
            </div>

            {/* Depart Date */}
            <div>
              <label htmlFor="departDate" className="block mb-2 text-sm font-medium text-gray-400">Departure Date</label>
              <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                <span className="p-3 bg-gray-700 text-gray-400">
                  <Calendar className="h-5 w-5" />
                </span>
                <input
                  type="date"
                  id="departDate"
                  name="departDate"
                  value={formData.departDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Return Date - shown only for round trip */}
            {tripType === 'roundTrip' && (
              <div>
                <label htmlFor="returnDate" className="block mb-2 text-sm font-medium text-gray-400">Return Date</label>
                <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                  <span className="p-3 bg-gray-700 text-gray-400">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Passengers */}
            <div>
              <label htmlFor="passengers" className="block mb-2 text-sm font-medium text-gray-400">Passengers</label>
              <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                <span className="p-3 bg-gray-700 text-gray-400">
                  <Users className="h-5 w-5" />
                </span>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cabin Class */}
            <div>
              <label htmlFor="cabinClass" className="block mb-2 text-sm font-medium text-gray-400">Cabin Class</label>
              <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg overflow-hidden">
                <span className="p-3 bg-gray-700 text-gray-400">
                  <Plane className="h-5 w-5" />
                </span>
                <select
                  id="cabinClass"
                  name="cabinClass"
                  value={formData.cabinClass}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 focus:outline-none"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="First">First Class</option>
                </select>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Popular Destinations</h3>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map(dest => (
                <div
                  key={dest.code}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-600"
                  onClick={() => setFormData({...formData, destination: dest.city})}
                >
                  {dest.city}
                </div>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-8">
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              Search Flights
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
                {formData.departure} to {formData.destination}
              </span>
              <span className="mx-3 text-gray-500">•</span>
              <span className="text-lg font-normal text-gray-400">
                {formData.departDate || 'Select date'} • {formData.passengers} {parseInt(formData.passengers) === 1 ? 'passenger' : 'passengers'}
              </span>
            </h2>

            {availableFlights.length > 0 ? (
              <div className="space-y-4">
                {availableFlights.map(flight => (
                  <div
                    key={flight.id}
                    className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center flex-wrap gap-4">
                        {/* Flight Info */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                            <Plane className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-bold text-lg">{flight.airline}</span>
                              <span className="ml-2 text-sm text-gray-400">{flight.flightNumber}</span>
                            </div>
                            <div className="text-sm text-gray-400">{flight.stops}</div>
                          </div>
                        </div>

                        {/* Time Info */}
                        <div className="flex items-center flex-1 justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{flight.departure}</div>
                            <div className="text-sm text-gray-400">{formData.departure}</div>
                          </div>

                          <div className="mx-4 flex flex-col items-center">
                            <div className="text-xs text-gray-400 mb-1">{flight.duration}</div>
                            <div className="w-32 relative">
                              <div className="border-t border-dashed border-gray-600"></div>
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 w-4 h-4">
                                <Plane className="h-4 w-4 text-blue-400" />
                              </div>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-bold">{flight.arrival}</div>
                            <div className="text-sm text-gray-400">{formData.destination}</div>
                          </div>
                        </div>

                        {/* Price & Booking */}
                        <div className="text-right min-w-32">
                          <div className="text-2xl font-bold text-blue-400">{flight.price}</div>
                          <button
                            onClick={() => handleBooking(flight)}
                            className="mt-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white py-2 px-6 rounded-lg transition-all duration-300 text-sm font-medium"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {flight.amenities.map((amenity, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl p-8 text-center">
                <p className="text-gray-400">No flights found for the selected criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
