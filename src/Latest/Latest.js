import React from 'react'
import './Latest.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'


function Latest() {
    return (
        <div>
            <div className="inline-text">
                <div className="left">
                   Latest Products
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li>All</li>
                            <li>New</li>
                            <li>Featured</li>
                            <li>Offer</li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div className="pics">
                <div className="item1">
                    <img src={img1}></img>
                    <h4>Men's shorts</h4>
                    <p>600 INR <span><s>1000 INR</s></span></p>
                </div>
                 <div className="item1">
                    <img src={img2}></img>
                    <h4>Green Hoddie</h4>
                    <p>600 INR<span><s>1000 INR</s></span></p>

                </div>
                 <div className="item1">
                    <img src={img3}></img>
                    <h4>Yellow Hoddie</h4>
                    <p>600 INR<span><s>1000 INR</s></span></p>

                </div>
                 <div className="item1">
                    <img src={img4}></img>
                    <h4>Grey Hoddie</h4>
                    <p>600 INR<span><s>1000 INR</s></span></p>

                </div>
                 <div className="item1">
                    <img src={img5}></img>
                    <h4>Black Pants</h4>
                    <p>600 INR<span><s>1000 INR</s></span></p>

                </div>
                
            </div>
        </div>
    )
}

export default Latest
