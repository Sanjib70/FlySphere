import { useLocation, useNavigate } from 'react-router-dom';

function BookingDetail () {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        No booking data found. Please make a booking first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-xl border-l-8 border-emerald-500">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center">
          ✈️ Ticket Confirmation
        </h2>
        <div className="space-y-3 text-lg">
          <div><strong>Name:</strong> {booking.name}</div>
          <div><strong>Email:</strong> {booking.email}</div>
          <div><strong>From:</strong> {booking.from}</div>
          <div><strong>To:</strong> {booking.to}</div>
          <div><strong>Date:</strong> {booking.date}</div>
          <div><strong>Time:</strong> {booking.time}</div>
          <div><strong>Passengers:</strong> {booking.passengers}</div>
          <div><strong>Booking ID:</strong> #{Math.floor(Math.random() * 1000000)}</div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingDetail;
