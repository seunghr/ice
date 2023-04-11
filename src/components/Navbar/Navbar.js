import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import main from "../../images/main.png"
import Sidebar from '../Sidebar/Sidebar'
import $ from "jquery";

const Navbar = () => {
  $(window).on("scroll", function(){
    let st = $(window).scrollTop();

    if(st < 100){
      if($(".lnb").hasClass("active"))
      $(".lnb").removeClass("active");
    }else if(st >= 100 && st <= 110){
      $(".lnb").addClass("active");
    }
  })

  return (
    <nav className='lnb'>
      <ul>
          <li><Link to="/STORY">STORY</Link></li>
          <li><Link to="/SHOP">SHOP</Link></li>
          <li><Link to="/PRODUCT">PRODUCT</Link></li>
      </ul>
      <ul className='lnb02'>
        <li><Link to="/"><img src={main}></img></Link></li>
      </ul>
      <div><Sidebar /></div>
    </nav>
  )
}

export default Navbar