import React from 'react'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div className="Navbar">
            <div className="logo">
               <h2><span>eStore</span>.</h2>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Latest</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact</li>
                        
                    </ul>
                </nav>
               
                <div className="cart">
                    <i style={{fontSize:"30px"}} className="fa fa-shopping-cart" ></i>
                </div>
                <div className="button">
                    Sign In
                </div>
        </div>
    )
}

export default NavigationBar
