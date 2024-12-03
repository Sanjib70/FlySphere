import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Payment from "./payment";

const FlightBooking = () => {
  
  const { state } = useLocation(); // To receive the selected flight details
  const navigate = useNavigate();
  const selectedFlight = state?.selectedFlight;

  // Redirect back to flight search if no flight is selected
  if (!selectedFlight) {
    navigate("/SearchFlight");
    return null;
  }

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    idNumber: "",
    paymentMethod: "credit-card", // Default payment method
  });
  

  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.age > 0 && formData.idNumber) {
      setConfirmationMessage(
        `Booking successful! Payment of ${selectedFlight.price} confirmed.`
      );
    } else {
      setConfirmationMessage("Error: Please fill in all the required details.");
    }
  };

  return (
    <>
    <Navbar2/>
    <div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 pt-20">Flight Booking</h2>
      <div className="mb-4 p-4 border rounded-md shadow-sm">
        <h3 className="font-semibold text-lg">Selected Flight Details:</h3>
        <p>Airline: {selectedFlight.airline}</p>
        <p>Time: {selectedFlight.time}</p>
        <p>Price: {selectedFlight.price}</p>
      </div>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">ID Number:</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            placeholder="Enter your ID number"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="net-banking">Net Banking</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        ><a className="bg-gray text-white px-3 py-2 rounded-md hover:bg-slate-800 durarion-300 cursor-pointer"onClick={() => document.getElementById("my_modal_4").showModal()}>Confirm Booking</a>
        <Payment/>
        </button>
      </form>
      {confirmationMessage && (
        <p
          className={`mt-4 font-semibold ${
            confirmationMessage.includes("successful")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {confirmationMessage}
        </p>
      )}
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default FlightBooking;


