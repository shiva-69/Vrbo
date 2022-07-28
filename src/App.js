
import { createContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

export const isLogin=createContext();

function App() {
  return (
    <div className="App">
      <isLogin.Provider value={false}>

      <Navbar/>
      </isLogin.Provider>
   
    </div>
  );
}

export default App;
