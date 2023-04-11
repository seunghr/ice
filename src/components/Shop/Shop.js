import React from 'react'
import "./Shop.css"
import top from "../../images/shop_top.jpg"
import cup01 from "../../images/cup01.png"
import cup02 from "../../images/cup02.png"
import cup03 from "../../images/cup03.png"
import cup04 from "../../images/cup04.png"
import left from "../../images/page_prev_arr.png"
import right from "../../images/page_next_arr.png"

const Shop = () => {
  return (
    <section className='shop_container'>
      <div className='shop_banner'><img src={top} /></div>
      <ul className='shop_m'>
        <li>SHOP</li>
        <li className='shop_img'>
          <div><img src={cup01} />
            <span>구독서비스 (2 ITEMS)</span>
          </div>
          <div><img src={cup02} />
            <span>바 (7 ITEMS)</span>
          </div>
          <div><img src={cup03} />
            <span>파인트 (5 ITEMS)</span>
          </div>
          <div><img src={cup04} />
            <span>컵 (4 ITEMS)</span>
          </div>
        </li>
      </ul>
      <ul className='shop_bottom'>
        <li><img src={left} /></li>
        <li>1</li>
        <li><img src={right} /></li>
      </ul>
    </section>
  )
}

export default Shop