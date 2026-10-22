import logo from "./logo/logo.png"
import './LoginPage.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext, useState } from "react";
import {Mycontext} from './App.js'
import { data, useNavigate } from "react-router-dom";
import Toast from "./Toast.js";
function LoginPage(){
    const {login,setlogin,data,setdata}=useContext(Mycontext)
const navigate =useNavigate()
function NewReg(){
    navigate('/NewRegistration')
    
}
function forgetPassword(){
      navigate('/ForgetPassword')
   }
function dashboard(){
    navigate('/Dashboard')
    
}
const [invalid ,setinvalid]=useState(false);
const emptyLogin={user:"", passward:""}

    function handlelogin(e){
        const {name,value}=e.target;
        setlogin(prev=>({...prev,
            [name]: value
        }))

    }
    return(

<div className="container">
     {invalid &&(  <Toast name={"Invalid Credential"} color={"red"} close={()=>{setinvalid(false)}} /> )}

<div className="ctn" >
<img src={logo} className="logo"  />

<div>< FaUser className="icon"/>

<input  type="text" placeholder="Username" onChange={handlelogin} value={login.user} name="user" /></div>


   <div>   <RiLockPasswordFill   className="icon" />  <input type="password" name="passward"  value={login.passward} onChange={handlelogin} placeholder="Password" /></div>

<div  className="option" ><h4 className="opt" onClick={NewReg} >New Registration</h4><h4  className="opt" onClick={()=>{forgetPassword()}}>Forget Password</h4></div>
 
        <button onClick={()=>{
const user = data[login.user];

if (user && user.passward === login.passward) {
 dashboard()

} else {
  setinvalid(true)
  setTimeout(()=>{
setinvalid(false)
  },3000)
 
}




            
        }}>Login</button>

</div>


    
</div>

    )

}

export default LoginPage; 