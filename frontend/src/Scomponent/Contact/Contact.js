import React from 'react'
import "./Contact.css"
import back from "../../images/back.jpg"

const Contact = () => {
  return (
    <section className='contact_title'>
      <div className='contact_bg'>
        <ul className='contact_txt01'>
          <li>Customer Center</li>
          <li>070-7760-0171</li>
        </ul>
        <ul className='contact_txt02'>
          <li>상담가능시간</li>
          <li>운영시간09:00 - 17:00 (점심시간12:00 - 13:00)</li>
          <li>토요일/일요일/공휴일 휴무</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact