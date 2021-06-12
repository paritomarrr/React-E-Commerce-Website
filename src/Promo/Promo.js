import React from 'react'
import photo from './photo.png'
import './Promo.css'

function Promo() {
    return (
        <div className="design">
            <div className="text-in">
              <h3>Find The Best Product </h3> 
               <h3> from Our Shop</h3>
                <button>Shop Now</button>
               
            </div>
             <div className="image">
                    <img src={photo} alt="photo"></img>
                </div>
        </div>
    )
}

export default Promo
