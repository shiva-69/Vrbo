import './App.css';
import HotelListing from './Pages/HotelListingPage/HotelListing';
import {Route,Routes} from "react-router-dom"
import { PaymentBegin } from './Pages/PaymentPages/PaymentBegin';
import { PaymentLastPage } from './Pages/PaymentPages/PaymentLastPage';
import { TripBoard } from './Pages/TripBoardPage/TripBoard';




function App() {
  return (
    <>
    <Routes>
      
    <Route path='/results' element={<HotelListing/>}/>
    <Route path='/firstPayment' element={<PaymentBegin/>}/>
    <Route path="/finalPayment" element={<PaymentLastPage/>}/>
    <Route path='/tripboard' element={<TripBoard/>}/>

    </Routes>

    
      
    </>
  );
}

export default App;
