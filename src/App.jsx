import './App.css';
import HotelListing from './Pages/HotelListingPage/HotelListing';
import {Route,Routes} from "react-router-dom";
import { CheckoutPage } from './Pages/CheckoutPage';
import { PaymentBegin } from './Pages/PaymentPages/PaymentBegin';
import { PaymentLastPage } from './Pages/PaymentPages/PaymentLastPage';

import { TripBoard } from './Pages/TripBoardPage/TripBoard';



import { Home } from './Pages/home/home';
import Signup from './Pages/signup/Signup';
import { Login } from './Pages/login/Login';



function App() {
  return (
    <>
    <Routes>
    
    <Route path="/" element={<Home/>} ></Route>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path="/signup" element={<Signup/>} ></Route>
    <Route path='/results' element={<HotelListing/>}/>
    <Route path='/checkout' element = {<CheckoutPage/> }/>
    <Route path='/firstPayment' element={<PaymentBegin/>}/>
    <Route path="/finalPayment" element={<PaymentLastPage/>}/>

    <Route path='/tripboard' element={<TripBoard/>}/>

    </Routes>

    
      
    </>
  );
}

export default App;
