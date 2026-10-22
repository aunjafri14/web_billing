import './NewRegistration.css';
import logo from './logo/logo.png'
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoDocumentLock } from "react-icons/io5";
import background from './logo/background.png'
import { Mycontext } from './App';
import { useContext, useState } from 'react';
import pass from './logo/pass.png'
import { useNavigate } from 'react-router-dom';
import { MdOutlineLogin } from "react-icons/md";
import Toast from './Toast';
import './ForgetPassword.css'
function ForgetPassword(){
   const navigate = useNavigate()
   function signin(){
      navigate('/')
   }
   const{register,setregister,data,setdata}=useContext(Mycontext)
   const [error,seterror]=useState({userName:false,secQues1:false,secQues2:false,secQues3:false,secQues4:false
   });
   const [forget,setforget]=useState({userName:"",secQues1:"",secQues2:"",secQues3:"",secQues4:"" ,passward:"",confirmPassward:""})
const [step1,setstep1]=useState(true);
const [step2,setstep2]=useState(false);
const [step3,setstep3]=useState(false);
const [fade2,setfade2]=useState(false);

   const disable = Object.values(forget).some(val => val.trim() === "")||
  Object.values(error).some(err => err === true);
const [SamePass,setsamePass]=useState(false);
const [userExist,setuserExist]=useState(false);


function handleForm(e){
const {name,value}=e.target;
setforget(Prev=>({...Prev,[name]:value}))

}

 function handleBlur(e){
   const { name, value } = e.target;

   let isError = false;
seterror(prev => ({
      ...prev,
      [name]: isError
   }));
}

   function handleFocus(e){
   const{name,value}=e.target;
   
      seterror(prev=>({...prev,[name]:false}))
   }
const initialState = {
  
  userName: "",
  passward: "",
  confirmPassward: "",
  secQues1: "",
  secQues2: "",
  secQues3: "",
  secQues4: ""
};
const [successfully,setsuccessfully ]=useState(false)
    return( 
<div className="container1" >
   


   <div className="ctn1" >
     
{!successfully &&(<>
<div className="logo" ><img src={logo}  /></div>
<hr/>

<h2 className='heading1' >Forget Passward </h2>
<h6 className='heading2'>We will help you reset your password and get back to your account.</h6>
<div className='info_ctn' >


<h3 className='step' ><i className='fa-solid fa-dot-circle'></i> Step 1 : Verify Your Account</h3>
<hr style={{width:"50%" }} />
   <div className='items'>
<div className='head_cover'><div  className='input_head'><label><i className='fa-solid fa-user-circle' ></i> User Name</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input  disabled={step1===false} placeholder='Enter Your User Name' type='text' name="userName" value={forget.userName} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus} /></div> <div className='inputs'><button onClick={()=>{
   if(data[forget.userName]){
   setstep2(true)
   setfade2(true)
   setstep1(false)
}
else{setuserExist(true)
   setTimeout(() => {
      setuserExist(false)
   }, 5000);
}
}}
 >Proceed <i className='fa-solid fa-arrow-right'></i></button></div></div>
<div className='head_cover'><div  className='input_head'>{error.userName &&(<p>Please Enter Your User Name</p>)}</div></div>

<div></div>
</div> 
<br/>

<h3 className='step' ><i className='fa-solid fa-dot-circle'></i> Step 2 : Verify Your Identity</h3>
<hr style={{width:"50%" }} />


<div className={`items ${fade2 === false ? "disabled" : ""}`}>

<div className='head_cover'>
   <div  className='input_head'>
      <IoDocumentLock className='icon'/><label>Security Question</label>
      </div><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input disabled={step2===false} type='text' placeholder="What is your mother's name ?" value={forget.secQues1} name='secQues1' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input disabled={step2===false}  type='text' placeholder= "What is the name of your first school ?" name='secQues2' value={forget.secQues2}  onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.secQues1 &&(<p>Please Enter Your Mother Name</p>)}</div><div  className='input_head'>{error.secQues2 && (<p>Please Enter Your First School Name</p>)}</div></div>

</div>

<div className={`items ${fade2 === false ? "disabled" : ""}`}>
<div className='head_cover'><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div><div  className='input_head'><IoDocumentLock className='icon'/><label >Security Question</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input disabled={step2===false}  type='text' placeholder= "What is your birthplace ?" name='secQues3' value={forget.secQues3} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input disabled={step2===false}  type='text' placeholder= "What is your favorite teacher's name?" name='secQues4' value={forget.secQues4} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.secQues3 &&(<p>Please Enter Your Birthplace</p>)}</div><div  className='input_head'>{error.secQues4 && (<p>Please Enter Your Favorite Teacher's Name</p>)}</div></div>

</div>
<button className={step2 === false ? "disabled" : ""} disabled={step2===false} onClick={()=>{
   if(data[forget.userName]?.secQues1===forget.secQues1 && data[forget.userName]?.secQues2===forget.secQues2 && 
      data[forget.userName]?.secQues3===forget.secQues3 && data[forget.userName]?.secQues4===forget.secQues4 
    ){setstep3(true)
      setstep2(false)
    }
}} >Verify Answers <i className='fa-solid fa-circle-check'></i></button>
<br/>
<br/>
<h3 className='step'><i className='fa-solid fa-dot-circle'></i> Step 3 : Reset Your Password</h3>
<hr style={{width:"50%" }} />

<div className={`items ${step3 === false ? "disabled" : ""}`}>

<div className='head_cover'><div  className='input_head'><RiLockPasswordFill className='icon'/><label>Passward</label></div><div  className='input_head'><RiLockPasswordFill className='icon'/><label>Confirm Passward</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input disabled={step3===false}  type='password' placeholder='Enter Your Passward' value={forget.passward} name='passward' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input disabled={step3===false}  type='password' value={forget.confirmPassward} placeholder='Enter Your Confirm Passward' name='confirmPassward' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.passward &&(<p>Please Enter Your Passward</p>)}</div><div  className='input_head'>{error.confirmPassward && (<p>Please Enter Confirm Passward</p>)}</div></div>

</div>




<div className='btnfp' >
<h4><i className='fa-solid fa-arrow-left'></i> Back to Login</h4><button className={step3 === false ? "disabled" : ""}  onClick={()=>{
   if(forget.passward!==forget.confirmPassward ){
     setsamePass(true)
     
   }
   else{
setsamePass(false)
   
   setdata(prev => ({
      ...prev,

      [forget.userName]: {
         ...prev[forget.userName],

         passward: forget.passward,
         confirmPassward: forget.confirmPassward
      }
   }));

   setsuccessfully(true);
    
   
}


}} >Submit <i className='fa-solid fa-paper-check'></i></button></div>
{SamePass &&(<p><i className='fa-solid fa-info-circle'></i>  Password and Confirm Password Should be Same</p>)}
</div>
</>)}
 {successfully &&  (<div className='succces'><img width={"55%"}    src={pass} />
<div> <button onClick={signin} className='goToLogin' ><MdOutlineLogin className='icony' />Go to Login</button> </div>

</div>)}

   </div>
{userExist && (<Toast name={"User doesn't Exist"} color={"red"} close={()=>{setuserExist(false)}} />)}


   
</div>

    )
}
export default ForgetPassword;