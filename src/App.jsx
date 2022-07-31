import './App.css';
import HotelListing from './Pages/HotelListingPage/HotelListing';
import {Route,Routes} from "react-router-dom";
import { CheckoutPage } from './Pages/CheckoutPage';
import { PaymentBegin } from './Pages/PaymentPages/PaymentBegin';
import { PaymentLastPage } from './Pages/PaymentPages/PaymentLastPage';


function App() {
  return (
    <>
  <CheckoutPage/>    
    <Routes>
      
    
    {/* <Route path='/' element={<HotelListing/>}/>
    <Route path='/firstPayment' element={<PaymentBegin/>}/>
    <Route path="/finalPayment" element={<PaymentLastPage/>}/> */}

    </Routes>

    
      
    </>
  );
}

export default App;
