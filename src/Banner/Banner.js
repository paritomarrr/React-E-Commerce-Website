import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="Banner">
            <div className="Left">
                <h2 className="flag"><span><img src="https://img.icons8.com/color/452/india.png" className="icon"></img></span>IN</h2>
            </div>
            <div className="Right">
                <nav>
                    <ul>
                        <li>My Account</li>
                        <li>Wish list</li>
                        <li>Shopping</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Banner
