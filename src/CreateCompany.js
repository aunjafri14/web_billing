import './CreateCompany.css';
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
import success from './logo/succesfully.png'
function CreateComapny(){
   const defaultDate ="01-04-2026"

   const navigate = useNavigate()
   function signin(){
      navigate('/CompanyList')
   }
   function dashboard(){
      navigate('/Dashboard')
   }
   const{register,setregister,data,setdata,countryStateData,company,setcompany,login}=useContext(Mycontext)
   const [error,seterror]=useState({fullName:false,userName:false,email:false,mobile:false,passward:false,confirmPassward:false,secQues1:false,secQues2:false,secQues3:false,secQues4:false
   });

   const disable = !company.companyName || !company.email||!company.mobile||!company.address||!company.country||company.state;

function handleForm(e){
const {name,value}=e.target;
setcompany(Prev=>({...Prev,[name]:value}))

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
const initialState = {companyName:"",gstin:"",email:"",mobile:"",Date:defaultDate,fy:`${defaultDate.slice(6, 10)}-${Number(defaultDate.slice(8, 10)) + 1}`,panNo:"",address:"",country:"",state:""}

const [successfully,setsuccessfully ]=useState(false)
    return(
<div className="containercc" >
   
   {(!successfully &&
<> 

   <div className="ctncc" >
   <div className='headercc'>
    <div className="logo" ><img src={logo}  /></div>

    
    </div>  



<h2 className='headingcc1' >Create Company</h2>
<h6 className='headingcc2'>Add a new company to manage billing and records</h6>
<div className='info_ctncc' >


<div className='items'>
<div className='head_covercc'><div  className='input_headcc'><i className='fa-solid fa-briefcase' ></i><h2> Basic Details</h2></div></div>
</div>
   <div className='itemscc'>
    
 
    
<div className='head_covercc'><div  className='input_headcc'><i className='fa-solid fa-building'></i><label>Company Name<span>*</span></label></div><div  className='input_headcc'><i className='fa-solid fa-file-invoice'></i><label>GSTIN</label></div></div>
<div className='input_covercc'>  <div className='inputscc' ><input placeholder='Enter Your Company Name' type='text' name="companyName" value={company.companyName} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus} /></div> <div className='inputscc'><input type='text' placeholder='Enter Your GSTIN  [Optional]' name='gstin' onChange={handleForm} value={company.gstin} /></div></div>
<div className='head_covercc'><div  className='input_headcc'>{error.companyName &&(<p><i className='fa-solid fa-info-circle'></i> Please Enter Your Company Name</p>)}</div></div>

<div></div>
</div> 

 <div className='items'>
<div className='head_covercc'><div  className='input_headcc'><IoIosMail className='iconcc'/><label>Email Address<span>*</span></label></div><div  className='input_headcc'><FaPhoneAlt  className='iconcc'/><label>Phone Number<span>*</span></label></div></div>
<div className='input_covercc'>  <div className='inputscc' ><input type='text' placeholder='Enter Your Email Address' name='email' onChange={handleForm} value={company.email} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputscc'><input type='text' value={company.mobile} placeholder='Enter Your Phone Number' name='mobile' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div></div>
<div className='head_covercc'><div  className='input_headcc'>{error.email &&(<p><i className='fa-solid fa-info-circle'></i> Please Enter Your Valid Email Address</p>)}</div><div  className='input_headcc'>{error.mobile && (<p><i className='fa-solid fa-info-circle'></i> Please Enter Your Valid Mobile Number </p>)}</div></div>

</div>

 <div className='items'>
<div className='head_covercc'><div  className='input_headcc'><i className='fa-solid fa-calendar'></i><label>Book begnning from <span>*</span></label></div><div  className='input_headcc'><i className='fa-solid fa-id-card'></i><label>IT PAN No.</label></div></div>
<div className='input_covercc'>  <div className='inputscc' ><input type='text' defaultValue="01-04-2026" placeholder='Please Enter Book Begnning from Date' value={company.date} name='date' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> <div className='inputscc'><input type='text' value={company.panNo} placeholder='Enter Your IT PAN   [Optional]' name='panNo' onChange={handleForm}  /></div></div>
<div className='head_covercc'><div  className='input_headcc'>{error.date &&(<p><i className='fa-solid fa-info-circle'></i> Please Enter Book Begnning from</p>)}</div></div>

</div>
<div className='items'>
<div className='head_covercc'><div  className='input_headcc'><i className='fa-solid fa-map-pin' ></i><h2> Address Details</h2></div></div>
</div>


<div className='items'>
<div className='head_covercc'><div  className='input_headAddcc'><i className='fa-solid fa-location-dot'></i><label>Address<span>*</span></label></div></div>
<div className='input_covercc'>  <div className='inputsAddcc' ><input type='text' placeholder="Enter Your Address" value={company.address} name='address' onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}  /></div> </div>
<div className='head_covercc'><div  className='input_headcc'>{error.address &&(<p><i className='fa-solid fa-info-circle'></i> Please Enter Your Address</p>)}</div><div  className='input_headcc'>{error.secQues2 && (<p>Please Enter Your Address</p>)}</div></div>

</div>

<div className='items'>
<div className='head_covercc'><div  className='input_headcc'><i className='fa-solid fa-globe'></i><label> Country<span>*</span></label></div><div  className='input_headcc'><i className='fa-solid fa-city'></i><label>State<span>*</span></label></div></div>
<div className='input_covercc'>  <div className='inputscc' ><select  name='country' value={company.country} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}><option disabled value="">Select Country</option>
   {Object.keys(countryStateData).map((country,i) =>(<option key={i}>{country}</option>))}</select>  </div> <div className='inputscc'><select  name='state' value={company.state} onChange={handleForm} onBlur={handleBlur} onFocus={handleFocus}><option disabled value="">Select State</option>{countryStateData[company.country]?.map((state,index)=>(<option key={index}>{state}</option>))}</select></div></div>
<div className='head_covercc'><div  className='input_headcc'>{error.country &&(<p><i className='fa-solid fa-info-circle'></i> Please Select Your Country</p>)}</div><div  className='input_headcc'>{error.state && (<p><i className='fa-solid fa-info-circle'></i> Please Select Your State </p>)}</div></div>

</div>


<div className='buttoncc'>
<button className='backcc' onClick={()=>{dashboard()
   setcompany(initialState)
}} ><i className='fa-solid fa-arrow-left'></i> Back to Dashboard</button>

<button className='submitcc'  onClick={()=>{
   
   
  setdata((prev) => ({
  ...prev,
  [login.user]: {
    ...prev[login.user],
    companies: {
      ...prev[login.user]?.companies,
      [company.companyName]: company
    }
  }
}));

setsuccessfully(true)
setcompany(initialState)








   


}} ><i className='fa-solid fa-plus'></i> Create Company </button></div>

</div>


   </div></>)}


   {successfully &&  (<div className='succces'><img width={"55%"}    src={success} />
<div> <button onClick={signin} className='goToLogin' ><MdOutlineLogin className='icony' />Get started</button> </div>

</div>)}
</div>

    )
}
export default CreateComapny;