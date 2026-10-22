import logo from './logo/logo.png';
import './Dashboard.css';
import { data } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Mycontext } from './App';
import { MdOutlineLogin } from "react-icons/md";
import list from './logo/list.png';
import { FaListUl } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import add from './logo/add.png';
import del from './logo/delete.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';




function Dashboard(){
      const{register,setregister,data,setdata,login,setlogin}=useContext(Mycontext)
      const welcome= data[login.user]?.fullName|| "Guest";
      const navigate = useNavigate()
   let firstchar= data[login.user]?.fullName.slice(0,1) ;
   let firstname =data[login.user]?.fullName.split(" ")[0]

   function signin(){
      navigate('/')
   }
   function createcompany(){
      navigate('/CreateCompany')
   }
   function companylist(){
      navigate('/CompanyList')
   }
   function deleteCompany(){
      navigate('/DeleteCompany')
   }


   const emptyLogin={user:"", passward:""}
   const [profile,setprofile]=useState(false)
return(
<div>
<div className="header"><div className="logo1" ><img src={logo}  /> </div>
<div className='headerRight'>
<div className='userDetails' onMouseMove={()=>{setprofile(true)}}  onMouseOut={()=>{setprofile(false)}} ><h4><i className='fa-solid fa-user-circle'></i>  Welcome , {firstname}<IoIosArrowDown className='icons'/></h4></div>
<div ></div>
</div>

</div>
{profile &&(<div className='profileMenu'  >
      <div className='profileMenuCtn'  onMouseMove={()=>{setprofile(true)}}  onMouseOut={()=>{setprofile(false)}}>
<div className='profile' ><span className='alphabet'>{firstchar}</span><h6 className='fullname'>{data[login.user]?.fullName}</h6></div>

<h6 className='mail'>{data[login.user]?.email}</h6>

<h6 className='menuButton' ><i className='fa-solid fa-user'></i> My Profile</h6>
      <h6 className='menuButton'><i className='fa-solid fa-id-card'></i> Update Details</h6>
      <h6 className='menuButton'><i className='fa-solid fa-lock'></i> Change Password</h6>
      <h6 className='logoutButton' onClick={()=>{signin()
setlogin(emptyLogin)
}}><i className='fa-solid fa-sign-out'></i> Logout</h6>

      </div>
    
      
</div>)}
<div className='heading' >
<div>
<h1>Dashboard</h1>
<h6>Manage your companies easily</h6>
<hr/>
</div>
</div>

<div className='menu' >

<div className='companyList'>
      <img  src={list}/>
      
<h3>Company List</h3>
<hr style={{width:"50%"}} />
<p>View your all companies.Open and Manage companies.
</p>
<button onClick={()=>{companylist()}}><FaListUl className='icony'/>Company List</button>
</div>


<div className='createCompany'>
      <img src={add}/>
<h3>Create Company</h3>
<hr style={{width:"50%"}} />
<p>Create a new company and get started.
</p>
<button onClick={()=>{createcompany()}}> <IoMdAdd className='icony'/>Create Company</button>



</div>
<div className='deleteCompany'>
      <img src={del} />
<h3>Delete Company</h3>
<hr style={{width:"50%"}} />
<p>Delete and remove an existing company.
</p>

<button onClick={()=>{deleteCompany()}} ><RiDeleteBin6Line className='icony'/>Delete Company</button>
</div>



</div>




</div>
)
}
export default Dashboard ;