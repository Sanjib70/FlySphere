import { Route, Routes } from "react-router-dom";
import About from "../src/componenets/About/About";
import Home from '../src/componenets/Home/Home';
import BookingDetail from './componenets/BookingDetail.jsx';
import Destinations from './componenets/Destinations';
import FlightBooking from './componenets/FlightBooking.jsx';
import Login from "./componenets/login.jsx";
import SearchFlight from './componenets/SearchFlight.jsx';
import Services from "./componenets/Services.jsx";
import Signup from './componenets/Signup.jsx';

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