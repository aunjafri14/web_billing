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
import reg from './logo/registration.png'
import { useNavigate } from 'react-router-dom';
import { MdOutlineLogin } from "react-icons/md";
import Toast from './Toast';
function NewRegistration(){
   const navigate = useNavigate()
   function signin(){
      navigate('/')
   }
   const{register,setregister,data,setdata}=useContext(Mycontext)
   
   const [error,seterror]=useState({fullName:false,userName:false,email:false,mobile:false,passward:false,confirmPassward:false,secQues1:false,secQues2:false,secQues3:false,secQues4:false
   });

   const disable = Object.values(register).some(val => val.trim() === "")||
  Object.values(error).some(err => err === true);
const [SamePass,setsamePass]=useState(false);
const [userExist,setuserExist]=useState(false);

function handleForm(e){
const {name,value}=e.target;
setregister(Prev=>({...Prev,[name]:value}))

}

 function handleBlur(e){
   const { name, value } = e.target;

   const mobileRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   let isError = false;

  
   if(value.trim() === ""){
      isError = true;
   }

  
   if(name === "email" && !emailRegex.test(value)){
      isError = true;
   }

   
   if(name === "mobile" && !mobileRegex.test(value)){
      isError = true;
   }

   
  

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
  fullName: "",
  userName: "",
  email: "",
  mobile: "",
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
   
   {(!successfully &&
<> 

   <div className="ctn1" >
     

<div className="logo" ><img src={logo}  /></div>
<hr/>

<h2 className='heading1' >New User Registration </h2>
<h6 className='heading2'>Create your account to get started with Web Billing</h6>
<div className='info_ctn' >

   <div className='items'>
<div className='head_cover'><div  className='input_head'><FaUser className='icon'/><label>Full Name</label></div><div  className='input_head'><FaUserLock className='icon'/><label>User Name</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input placeholder='Enter Your Full Name' type='text' name="fullName" value={register.fullName} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus} /></div> <div className='inputs'><input type='text' placeholder='Enter Your User Name' name='userName' onChange={handleForm} value={register.userName}  onBlur={handleBlur} onFocus={handleFocus} /></div></div>
<div className='head_cover'><div  className='input_head'>{error.fullName &&(<p>Please Enter Your Full Name</p>)}</div><div  className='input_head'>{error.userName && (<p>Please Enter User Name</p>)}</div></div>

<div></div>
</div> 

 <div className='items'>
<div className='head_cover'><div  className='input_head'><IoIosMail className='icon'/><label>Email Address</label></div><div  className='input_head'><FaPhoneAlt  className='icon'/><label>Phone Number</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input type='text' placeholder='Enter Your Email Address' name='email' onChange={handleForm} value={register.email} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input type='text' value={register.mobile} placeholder='Enter Your Phone Number' name='mobile' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.email &&(<p>Please Enter Your Valid Email Address</p>)}</div><div  className='input_head'>{error.mobile && (<p>Please Enter Your Valid Mobile Number </p>)}</div></div>

</div>

 <div className='items'>
<div className='head_cover'><div  className='input_head'><RiLockPasswordFill className='icon'/><label>Passward</label></div><div  className='input_head'><RiLockPasswordFill className='icon'/><label>Confirm Passward</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input type='password' placeholder='Enter Your Passward' value={register.passward} name='passward' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input type='password' value={register.confirmPassward} placeholder='Enter Your Confirm Passward' name='confirmPassward' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.passward &&(<p>Please Enter Your Passward</p>)}</div><div  className='input_head'>{error.confirmPassward && (<p>Please Enter Confirm Passward</p>)}</div></div>

</div>

<div className='items'>
<div className='head_cover'><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input type='text' placeholder="What is your mother's name ?" value={register.secQues1} name='secQues1' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input type='text' placeholder= "What is the name of your first school ?" name='secQues2' value={register.secQues2}  onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.secQues1 &&(<p>Please Enter Your Mother Name</p>)}</div><div  className='input_head'>{error.secQues2 && (<p>Please Enter Your First School Name</p>)}</div></div>

</div>

<div className='items'>
<div className='head_cover'><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div><div  className='input_head'><IoDocumentLock className='icon'/><label>Security Question</label></div></div>
<div className='input_cover'>  <div className='inputs' ><input type='text' placeholder= "What is your birthplace ?" name='secQues3' value={register.secQues3} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputs'><input type='text' placeholder= "What is your favorite teacher's name?" name='secQues4' value={register.secQues4} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_cover'><div  className='input_head'>{error.secQues3 &&(<p>Please Enter Your Birthplace</p>)}</div><div  className='input_head'>{error.secQues4 && (<p>Please Enter Your Favorite Teacher's Name</p>)}</div></div>

</div>

{userExist && (<Toast name={"User Already Exist"} color={"red"} close={()=>{setuserExist(false)}} />)}


<button disabled={disable} onClick={()=>{
   if(register.passward!==register.confirmPassward ){
     setsamePass(true)
     
   }
   else if(data[register.userName]){
     setuserExist(true)
setTimeout(() => {
   setuserExist(false)
}, 5000);
   }
   else{
    setdata(prev => ({
  ...prev,
  [register.userName]: register
}));

setregister(initialState);
setsuccessfully(true)





   }


}} >Submit </button>
{SamePass &&(<p><i className='fa-solid fa-info-circle'></i>  Password and Confirm Password Should be Same</p>)}
</div>


   </div></>)}


   {successfully &&  (<div className='succces'><img width={"55%"}    src={reg} />
<div> <button onClick={signin} className='goToLogin' ><MdOutlineLogin className='icony' />Go to Login</button> </div>

</div>)}
</div>

    )
}
export default NewRegistration;