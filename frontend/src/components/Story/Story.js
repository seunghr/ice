import React from 'react'
import "./Story.css"
import icon from "../../images/scroll.png"
import story01 from "../../images/story_01.jpg"
import story02 from "../../images/story_02.jpg"
import story03 from "../../images/story_03.jpg"
import story04 from "../../images/story_04.jpg"
import story05 from "../../images/story_05.jpg"

const Story = () => {
  return (
    <section className='section_container'>
      <div className='section_bg'>
        <ul className='section_title'>
          <li>국내산 원유로 만드는 풍부한 맛</li>
          <li>아이스크림에서 가장 많은 비중을 차지하고 있는 것이 우유라는 점에서 고민을 시작했습니다.</li>
          <li>그래서 끌레도르는 국내 청정 지역의 건강한 젖소에서 짜낸 신선한 우유만을 사용합니다.</li>
          <li>국내산 원유로 만드는 깔끔하고도 풍부한 맛을 느껴보세요.</li>
        </ul>
        <div className='section_icon'><img src={icon}/></div>
        <ul className='section_story01'>
          <li><img src={story01} /></li>
          <li>유화제, 증점제, 합성향료를 빼고 100% 국내산 원유와 유크림을 사용했습니다.</li>
          <li>재료 본연의 맛에 충실한 정직한 제품을 만나보세요.</li>
        </ul>
        <ul className='section_story02'>
          <li><img src={story02} /></li>
          <li>유화제, 증점제, 합성향료를 빼고 100% 국내산 원유와 유크림을 사용했습니다.</li>
          <li>재료 본연의 맛에 충실한 정직한 제품을 만나보세요.</li>
        </ul>
        <ul className='section_story03'>
          <li><img src={story03} /></li>
          <li>유화제, 증점제, 합성향료를 빼고 100% 국내산 원유와 유크림을 사용했습니다.</li>
          <li>재료 본연의 맛에 충실한 정직한 제품을 만나보세요.</li>
        </ul>
        <ul className='section_story04'>
          <li><img src={story04} /></li>
          <li>유화제, 증점제, 합성향료를 빼고 100% 국내산 원유와 유크림을 사용했습니다.</li>
          <li>재료 본연의 맛에 충실한 정직한 제품을 만나보세요.</li>
        </ul>
        <ul className='section_story05'>
          <li><img src={story05} /></li>
          <li>유화제, 증점제, 합성향료를 빼고 100% 국내산 원유와 유크림을 사용했습니다.</li>
          <li>재료 본연의 맛에 충실한 정직한 제품을 만나보세요.</li>
        </ul>
      </div>
    </section>
  )
}

export default Story