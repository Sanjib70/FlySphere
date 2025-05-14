import { Route, Routes } from "react-router-dom";
import About from "../src/components/About/About";
import Home from '../src/components/Home/Home';
import BookingDetail from './components/BookingDetail.jsx';
import Destinations from './components/Destinations';
import FlightBooking from './components/FlightBooking.jsx';
import Login from "./components/Login.jsx";
import SearchFlight from './components/SearchFlight.jsx';
import Services from "./components/Services.jsx";
import Signup from './components/Signup.jsx';

function App() {
  return (
  <> 
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/SearchFlight" element={<SearchFlight/>}/>
    <Route path="/bookingDetails" element={<BookingDetail />} />
    <Route path="/Destinations" element={<Destinations />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/FlightBooking" element={<FlightBooking/>}/>
    </Routes>
    </div>
  </>
  );
}

export default App