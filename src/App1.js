// import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/home/home';
import Signup from './Pages/signup/Signup';
import { Login } from './Pages/login/Login';
import { Navbar } from './Components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import TripBoard from './Pages/tripBoard/Trips';
// import S from './Components/search';

function App() {
  return (<>
 {/* <Navbar/> */}
  <Routes>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path="/tripboard" element={ <TripBoard/>} ></Route>
    <Route path="/signup" element={<Signup/>} ></Route>
    <Route path="/" element={<Home/>} ></Route>
  </Routes>
    
  {/* <Home/> */}
    
    
  </>);
}

export default App;
