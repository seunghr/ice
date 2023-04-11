import React,{useState} from 'react'
import axios from "axios"
import { Navigate } from 'react-router-dom'

const Register = () => {

    const [ userid, setUserid] = useState('');
    const [ userpwd, setUserpwd] = useState('');
    const [ navigate, setNavigate] = useState(false);

    const registerHandle = async (e)=>{
        e.preventDefault(); 
        const data = await axios.post('http://localhost:4500/register',{
            userid, userpwd
        })

        if( data.data )  setNavigate(true);
    }

    if( navigate ) return <Navigate to="/login" />

  return (
    <div className="register-container">
            <h2>회원가입</h2>
            <form onSubmit={ registerHandle }>
                <div className="box">
                    <label htmlFor="userid">아이디</label>
                    <input type="text" 
                            id="userid"
                           value={userid}
                           onChange={ e=>setUserid(e.target.value)}
                    />
                </div>
                <div className="box">
                    <label htmlFor="userpwd">비밀번호</label>
                    <input type="password" 
                           id="userpwd"
                           value={userpwd}
                           onChange={ e=>setUserpwd(e.target.value)}
                    />
                </div>

                <button type="submit">등록</button>
            </form>
        </div>
  )
}

export default Register