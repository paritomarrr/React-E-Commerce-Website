import React from 'react'
import './Category.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'

function Category() {
    return (
        <div>
            <div className="head">
                Shop by Category
            </div>
            <div class="flexbox">
  <div class="items"><img src={img1}></img>
 
  </div>
  <div class="items">
      <img src={img2} alt="photo"></img>
     
      </div>
  <div class="items"><img src={img3}></img>
 </div>  
</div>
        </div>
    )
}

export default Category
