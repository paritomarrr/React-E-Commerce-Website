import React from 'react'
import './Shop.css'

function Shop() {
    return (
        <div className="main-heading">
            <div className="heading">
               <h3>Get Our</h3>
               <h3>Latest Offers News</h3>
            </div>
            <div className="input">
                <input type="email" placeholder="Your email id" />
                <button>Shop</button>
            </div>
        </div>
    )
}

export default Shop
