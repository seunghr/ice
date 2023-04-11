import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className='footer_top'>
        <ul className='footer_title'>

            <li>고객센터</li>
            <li>이용약관</li>
            <li>개인정보취급</li>
        </ul>
        <div className='footer_sub'>
          <ul className='footer_sub01'>
            <li>(주)빙그레</li>
            <li>주소 : 서울특별시 중구 서소문로 11길 19</li>
            <li>사업자등록번호 : 123-81-00631 [사업자정보확인]</li>
            <li>통신판매업신고번호 : 다산-0172</li>
          </ul>
          <ul className='footer_sub02'>
            <li>웨스트윙</li>
            <li>웨스트윙   대표 : 최순흠</li>
            <li>주소 : 경상북도 영천시 올밤길50 사업자등록번호 : 620-18-74347[사업자정보확인]</li>
            <li>통신판매업신고번호 : 2017-경북영천-0027 이메일 : imfo@westwing.kr</li>
          </ul>
          <ul className='footer_sub03'>
            <li>고객센터</li>
            <li>TEL. <sapn className="font_size">070-7760-0171</sapn></li>
            <li>운영시간 09:-17:00</li>
            <li>점심시간 12:00-13:00</li>
            <li>토요일/일요일/공휴일 휴무</li>
          </ul>
        </div>
        <ul className='footer_last'>
          <li>Copyright (주)빙그레 All rights reserved.</li>
        </ul>
    </section>
  )
}

export default Footer