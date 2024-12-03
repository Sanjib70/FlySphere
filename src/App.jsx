import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../src/componenets/About/About";
import Home from '../src/componenets/Home/Home';
import BookingDetail from './componenets/BookingDetail.jsx';
import FlightBooking from './componenets/FlightBooking.jsx';
import SearchFlight from './componenets/SearchFlight.jsx';
import Signup from './componenets/Signup.jsx';

function App() {
  return (
  <>
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/SearchFlight" element={<SearchFlight/>}/>
    <Route path="/booking-details" element={<BookingDetail />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/FlightBooking" element={<FlightBooking/>}/>
    </Routes>
    </div>
  </>
  );
}

export default App