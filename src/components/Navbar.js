import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const {cart} = useSelector((state)=>state);
  return (
    <div>
        <div className='flex flex-row justify-between'>
            <NavLink to='/'>
                <div>
                    <img className='h-20 w-30 object-contain' src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"/>

                </div>
            </NavLink>
            <div>
                <NavLink to='/'>
                   <p>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                   <FaShoppingCart/>
                   <span>{cart.length}</span>
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar