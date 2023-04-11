import React from 'react'
import "./Otion.css"
import sns01 from "../../images/sns_1.jpg"
import sns02 from "../../images/sns_2.jpg"
import sns03 from "../../images/sns_3.jpg"
import sns04 from "../../images/sns_4.jpg"

const Otion = () => {
  return (
    <section className='option_top'>
        <ul className='option_title'>
            <li>끌레도르</li>
            <li>끌레도르와 함께 하는 감동의 순간을 확인해보세요.</li>
        </ul>
        <ul className='option_img'>
            <li><img src={sns01}></img></li>
            <li><img src={sns02}></img></li>
            <li><img src={sns03}></img></li>
            <li><img src={sns04}></img></li>
        </ul>
    </section>
  )
}

export default Otion