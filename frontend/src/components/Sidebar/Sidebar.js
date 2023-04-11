import React, {useContext, useState} from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom";
import nav from "../../images/nav.png"
import close from "../../images/menu_close.png"

const Sidebar = () => {
    
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const [bgToggle, setBgToggle] = useState(true);

    const sidebarMenu = ["CART", "LOGIN", "CONTACT"];
    const sidebarHandle = () => {
        setSidebarToggle(!sidebarToggle);
        setBgToggle(!bgToggle);
    }
  return (
    <section className='sidebar_back'>
        <div className='bgBlack' style={{display : bgToggle ? "none" : "block"}}></div>

        <nav className='sidebar_container' style={{right : sidebarToggle ? "-300px" : "0"}}>
            <div>
                <img src={close} className='close' onClick={sidebarHandle}
                    style={{display : sidebarToggle ? "none" : "block"
                    }}
                    />

            </div>
            <div ><img src={nav} onClick={sidebarHandle} className='nav'
            style={{display : sidebarToggle ? "block" : "none"
            
            }}></img></div>
            <ul className="sidebar_nav">
                <li>
                    <Link to={"/Orders"}>정기구독하기</Link>
                </li>

                {
                    sidebarMenu.map(menu => (<li key={menu}><Link to={`/${menu}`}>{menu}</Link>
                    </li>))
                }
            </ul>
        </nav>
    </section>
  )
}

export default Sidebar