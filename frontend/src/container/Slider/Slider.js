import React, {useState, useEffect} from 'react'
import banner01 from "../../images/banner01.jpg"
import banner02 from "../../images/banner02.jpg"
import banner03 from "../../images/banner03.jpg"
import left from "../../images/left_btn.svg"
import right from "../../images/right_btn.svg"
import "./Slider.css"
import { BiHeart } from "react-icons/bi";

const Slider = () => {
  const images = [banner01, banner02, banner03];
  const [sliderToggle, setSliderToggle] = useState(0);
  const length = images.length;

  useEffect(() => {
    console.log(sliderToggle);
  }, [sliderToggle])

  const nextSlider = () => {
    setSliderToggle(sliderToggle === length - 1 ? 0 : sliderToggle + 1)
  }

  const prevSlider = () => {
    setSliderToggle(sliderToggle === 0 ? length - 1 : sliderToggle - 1)
  }
  return (
    <section className='slider-container'>
      <div className='slider-box' 
      style={{marginLeft : `${-sliderToggle * 1900}px`}}>
        <div className='slider'>
          <img src={banner01} />
        </div>
        <div className='slider'>
          <img src={banner02} />
        </div>
        <div className='slider'> 
          <img src={banner03} />
        </div>
      </div>

      <ul>
        <li onClick={prevSlider} className= "left_arrow"><img src={left}></img></li>
        <li onClick={nextSlider} className = "right_arrow"><img src={right}></img></li>
      </ul>

      <ul className='indecator'>
        {
          images.length && images.map((img, index) => (
            <li onClick={() => {setSliderToggle(index)}} key={index}>
              {/* <BiHeart /> */}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Slider