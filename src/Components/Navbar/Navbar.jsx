import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    
    return (
        <div className='navbar'>
            <div onClick={()=>{setMenu("shop")}} className="nav-logo">
                <Link style={{textDecoration: 'none', color: '#626262', display: 'flex', alignItems: 'center'}} to='/'><img src={logo} alt="" />
                <p>SHOPPER</p>
                </Link>{menu==="shop"?<hr />:<></>}
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/mens'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button onClick={()=>{setMenu("login")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/login'>Login</Link>{menu==="login"?<></>:<></>}</button>
                <div onClick={()=>{setMenu("cart")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/cart'><img src={cart_icon} alt="" /></Link>{menu==="cart"?<></>:<></>}</div>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar