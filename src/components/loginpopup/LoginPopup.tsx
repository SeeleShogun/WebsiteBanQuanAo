import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.scss'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

interface LoginPopupProps {
    setShowLogin: (show: boolean) => void
}

const LoginPopup = ({setShowLogin}:LoginPopupProps) => {

    const {url,setToken} = useContext(StoreContext)

    const [currentState,setCurrentState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        //api call
        let newUrl = url
        if(currentState === 'Login'){
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }
        
        const respone = await axios.post(newUrl,data)

        if(respone.data.success){
            setToken(respone.data.token)
            localStorage.setItem('token',respone.data.token)
            setShowLogin(false)
        }
        else{
            alert(respone.data.message)
        }
        
    }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.add_icon_x}  alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password'required />
            </div>
            <button type='submit' >{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==='Login'
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
            
            
        </form>
    </div>
  )
}

export default LoginPopup