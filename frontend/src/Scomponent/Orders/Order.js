import React, {useState, useEffect} from 'react'
import "./Order.css"
import shop_top from "../../images/shop_top.jpg"
import mini_banner from "../../images/mini_banner.jpg"
import bottom_btn from "../../images/bottom_btn.png"
import { BiCaretDown } from "react-icons/bi";
import ot01 from "../../images/ot01.jpg"
import ot02 from "../../images/ot02.jpg"
import ot03 from "../../images/ot03.jpg"
import if01 from "../../images/if01.jpg"
import if02 from "../../images/if02.jpg"
import if03 from "../../images/if03.jpg"
import if04 from "../../images/if04.jpg"

const Order = () => {
  const orderMenu = () => {
    alert("수령일을 선택하세요");
  }

  
  const [acTogggle, setAcToggle] = useState(0);
  

  return (
    <section className='order_top'>
      <div><img src={shop_top} /></div>
      <ul className='order_mini'>
        <li><img src={mini_banner} /></li>
        <li className='order_t'>
          <ul className='order_tt01'>
            <li>정기구독 하기</li>
            <li><a href="#">공유<img src={bottom_btn} /></a></li>
          </ul>
          <ul className='order_tt02'>
              <li>구독금액</li>
              <li>S size 19,900원</li>
              <li>L size 24,900원</li>
          </ul>
          <ul className='order_tt03'>
            <li>결제방법</li>
            <div>
              <li>선결제</li>
              <li>정기결제</li>
            </div>
          </ul>
          <div className='order_tt044'>배송주기</div>
          <select className='order_tt04'>
            <option>1달에 한번</option>
          </select>
          <div className='order_tt055'>구독기간</div>
          <select className='order_tt05'>
            <option>2회</option>
          </select>
            <ul className='order_tt06'>
              <li>배송일</li>
              <li>수령일을 선택하세요</li>
            </ul>
            <div className='order_tt066'></div>
        </li>
        <ul className='order_tt07'>
          <li>*제주, 도서산간, 군부대 배송 불가</li>
          <li onClick={orderMenu}>
            <div>정기배송 신청하기</div>
          </li>
        </ul>
      </ul>
      <ul className='order_middle'>
        <li>제품소개</li>
        <li>제품정보</li>
        <li>구매후기</li>
        <li>FAQ</li>
      </ul>
      <div className='accordion_container'>
        <div className={acTogggle === 0 ? "accordion_box" : "accordion_box active"}>
          <div className='ac_title' onClick={() => {setAcToggle(0)}}>
            <span>제품소개</span>
            <BiCaretDown className={acTogggle === 0 ? "bi-caret-down active" : "bi-caret-down"}/>
          </div>
          <div className='ac_content'>
            <img src={ot01} />
            <img src={ot02} />
            <img src={ot03} />
          </div>
        </div>
        <div className={acTogggle === 1 ? "accordion_box" : "accordion_box active"}>
          <div className='ac_title' onClick={() => {setAcToggle(1)}}>
            <span>제품정보</span>
            <BiCaretDown className={acTogggle === 0 ? "bi-caret-down active" : "bi-caret-down"}/>
          </div>
          <div className='ac_content'>
            <img src={if01} />
            <img src={if02} />
            <img src={if03} />
            <img src={if04} />
          </div>
        </div>
        <div className={acTogggle === 2 ? "accordion_box" : "accordion_box active"}>
          <div className='ac_title' onClick={() => {setAcToggle(2)}}>
            <span>구매후기</span>
            <BiCaretDown className={acTogggle === 0 ? "bi-caret-down active" : "bi-caret-down"}/>
          </div>
          <div className='ac_content'>
            
          </div>
        </div>
        <div className={acTogggle === 3 ? "accordion_box" : "accordion_box active"}>
          <div className='ac_title' onClick={() => {setAcToggle(3)}}>
            <span>FAQ</span>
            <BiCaretDown className={acTogggle === 0 ? "bi-caret-down active" : "bi-caret-down"}/>
          </div>
          <div className='ac_content'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order