import React from 'react'
import {ImMobile} from 'react-icons/im';
import {BsSuitHeart} from 'react-icons/bs';
import {FiUser} from 'react-icons/fi';
import {BiUserPlus} from 'react-icons/bi';
import {FiHelpCircle} from 'react-icons/fi';

import './Navbar.css';

function Navbar() {
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
                <li><FiUser/>Log in</li>
                <li> <BiUserPlus/> Signup</li>
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
