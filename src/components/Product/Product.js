import React, { useEffect, useState } from 'react'
import "./Product.css"
import top from "../../images/shop_top.jpg"
import cup02 from "../../images/cup02.png"
import cup03 from "../../images/cup03.png"
import cup04 from "../../images/cup04.png"

const Product = () => {
  const  [ posts, setPosts ] = useState([]);
  // fetch한 posts를 state 초기화
    
  const getPosts = async ()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const res = await response.json();
            console.log( res.length );
            setPosts( res );
            //posts = res
        }catch(err){
        }
  }  

  useEffect(()=>{
      getPosts();
  }, [posts]) 
  
  return (
    <section className='product_container'>
      <div className='product_banner'><img src={top} /></div>
      <ul className='product_title'>
        <li>PRODUCT</li>
        <li className='product_img'>
          <div><img src={cup02} />
            <span>BAR</span>
          </div>
          <div><img src={cup03} />
            <span>PINT</span>
          </div>
          <div><img src={cup04} />
            <span>CUP</span>
          </div>
        </li>
      </ul>
      <ul className='product_tab01'>
        <li><span>15</span> ITEMS</li>
        <ul className='product_tab02'>
          <li>신상품</li>
          <li>상품명</li>
          <li>낮은가격</li>
          <li>높은가격</li>
        </ul>
      </ul>

      <table className='table-container'>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>
        { 
            posts.length && posts.map(post =>(
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )) 
        }
    </table>
    </section>
  )
}

export default Product