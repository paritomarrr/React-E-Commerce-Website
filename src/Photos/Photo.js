import React from 'react'
import i1 from './gallery1.webp'
import i2 from './gallery2.webp'
import i3 from './gallery3.webp'
import i4 from './gallery4.png'
import './Photo.css'


function Photo() {
    return (
        <div className="photo">
            <img src={i1} />
            <img src={i2} />
            <img src={i3} />
            <img src={i4} />
           

        </div>
    )
}

export default Photo
