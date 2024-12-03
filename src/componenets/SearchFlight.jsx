import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SearchFlight = () => {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
  });

  const [flights, setFlights] = useState([]);

  // Dummy flight data for simulation
  const dummyFlights = [
    { id: 1, airline: "Air India", time: "10:00 AM", price: "$120" },
    { id: 2, airline: "IndiGo", time: "2:00 PM", price: "$100" },
    { id: 3, airline: "SpiceJet", time: "6:00 PM", price: "$150" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter logic (can be replaced with an API call)
    const results = dummyFlights.filter(
      (flight) =>
        flight.time >= formData.time && formData.departure && formData.destination
    );

    setFlights(results);
  };
  const navigate = useNavigate();

  const handleSelectFlight = (flight) => {
    // Redirect to booking page with flight details
    navigate("/FlightBooking", { state: { selectedFlight: flight } });
  };


  return (
    <>
    <div>
      <Navbar/>
    <div className="p-4 pt-20">
      <h2 className="text-xl font-bold mb-4">Flight Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block">Departure:</label>
          <input
            type="text"
            name="departure"
            value={formData.departure}
            onChange={handleInputChange}
            placeholder="Enter departure city"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block">Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Enter destination city"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block">Passenger</label>
          <input
            type="text"
            name="adults"
            value={formData.passenger}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search Flights
        </button>
      </form>

      {/* Flight Results */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Available Flights</h3>
        {flights.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {flights.map((flight) => (
              <li
                key={flight.id}
                className="p-4 border rounded-md shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{flight.airline}</p>
                  <p>Time: {flight.time}</p>
                </div>
                <div>
                  <p className="font-bold text-green-600">{flight.price}</p>
                </div>
                <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleSelectFlight(flight)}
            >
              Select
            </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No flights available.</p>
        )}
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default SearchFlight