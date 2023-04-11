import React, {useState, useRef} from 'react'
import axios from "axios"
import {Navigate} from 'react-router-dom'
import "./Login.css"
import shop_top from "../../images/shop_top.jpg"

const Login = ({setLogin}) => {
  const [pwShow, setPwShow] = useState(false);
  const [pwType, setPwType] = useState("password");

  const inputRef = useRef();
  const pwRef = useRef();

  const [ userid, setUserid] = useState('');
  const [ userpwd, setUserpwd] = useState('');
  const [ navigate, setNavigate] = useState(false);

  const registerHandle = async (e)=>{
        e.preventDefault(); 
        const data = await axios.post('http://localhost:4500/login',{
            userid, userpwd
        })
        console.log(data);
        if(data.data) setLogin(true);
        
        if( data.data )  setNavigate(true);
    }

    if( navigate ) return <Navigate to="/" />
  

  const login = (e) => {
    // console.log(inputRef.current.value);

    if(inputRef.current.value !== "" && pwRef.current.value !== "")
      alert(`${inputRef.current.value}로그인 되었습니다.`);
    else
      alert("아이디와 비밀번호를 확인해주세요.");
      e.preventDefault();
    
      inputRef.current.value = "";
      pwRef.current.value = "";
      inputRef.current.focus();
  }

  const onPasswordShow = () => {
    setPwShow(!pwShow);
    setPwType(pwShow ? "password" : "text");
  }

  return (
    <div className='login_section'>
      <img src={shop_top} />
      <section className='login_top'>
        <div className='login_div'>로그인</div>
        <div className='login_mi'>
          회원 로그인
            <form onSubmit={ registerHandle }>
              <ul className='login_left'>
                <li>
                  <input type="text" placeholder='아이디' ref={inputRef} id="userid" autoFocus value={userid}
                           onChange={ e=>setUserid(e.target.value)}/>
                </li>
                <li>
                  <input type={pwType} placeholder='비밀번호' ref={pwRef} id="userpw" value={userpwd}
                           onChange={ e=>setUserpwd(e.target.value)}/>
                </li>
              </ul>
              <ul className='login_right'>
                <li><button onClick={login}type="submit">로그인</button></li>
              </ul>
            </form>
          <ul className='login_bottom'>
            <li><input type="checkbox" value="비밀번호 보기" onChange={onPasswordShow} id="showpw"/>비밀번호 보기</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Login