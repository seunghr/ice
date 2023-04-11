import React from 'react'
import top_bar01 from "../../images/top_bar01.jpg"
import top_bar02 from "../../images/top_bar02.jpg"
import "./Header.css"

const Header = () => {
  return (
    <section className='header_tops'>
      <div className="header_top">
        <img src={top_bar01}></img>
      </div>
    </section>
  )
}

export default Header