import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar2 from './Navbar2';

const BookingDetail = () => {
  const { state } = useLocation(); // Receiving the state passed via navigate
  const bookingId = state?.bookingId;

  if (!bookingId) {
    return <div>No booking details available</div>;
  }

  return (
    <>
    <Navbar2/>
    <div className='pt-20'>
    <h2>Booking Details</h2>
    <p><strong>Booking ID:</strong> {bookingId}</p>
    </div>
    <Footer/>
    </>
  );
}

export default BookingDetail