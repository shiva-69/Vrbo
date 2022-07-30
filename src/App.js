// import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/home/home';
import Signup from './Pages/signup/Signup';
import { Login } from './Pages/login/Login';
import { Navbar } from './Components/navbar/navbar';
// import S from './Components/search';

function App() {
  return (<>
  <Navbar/>
    <Home/>
    <Login/>
    <Signup/>
    
  </>);
}

export default App;
