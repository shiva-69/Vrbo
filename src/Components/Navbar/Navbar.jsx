import React, { useContext } from 'react'
import {ImMobile} from 'react-icons/im';
import {BsSuitHeart} from 'react-icons/bs';
import {FiUser} from 'react-icons/fi';
import {BiUserPlus} from 'react-icons/bi';
import {FiHelpCircle} from 'react-icons/fi';

import './Navbar.css';
import { isLogin } from '../../App';

function Navbar() {
  const auth=useContext(isLogin);
  return (
    <>
    <div className="Navbar-container">
        <div>
            <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="logo" />
        </div>
        <div >
            <ul className='nav-right'>
                <li><ImMobile/>Get the help</li>
                <li><BsSuitHeart/>
                  Try Boards
                </li>
                {
                  auth?<li><FiUser/>Log in</li>:null
                }
              
                {
                  
                  auth? <li> <BiUserPlus/> Signup</li>:null
                }
                <li> <FiHelpCircle/>  Help</li>
                <li>GBP</li>
                <li>EN</li>
                <li>List your Property</li>
                
            </ul>

        </div>
    </div>
      
    </>
  )
}

export default Navbar
