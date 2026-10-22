import logo from './logo/logo.png';
import './CompanyList.css';
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




function CompanyList(){
      const{register,setregister,data,setdata,login,setlogin,myCompany,setmyCompany}=useContext(Mycontext)
      const welcome= data[login.user]?.fullName|| "Guest";
      const navigate = useNavigate()
   function signin(){
      navigate('/')
   }
   function dashboard(){
      navigate('/Dashboard')
   }
   function openCompany(){
    navigate('/Company')
   }
   const emptyLogin={user:"", passward:""}
   const [profile,setprofile]=useState(false)
return(
<div>
<div className="header"><div className="logo1" ><img src={logo}  /> </div>
<div className='headerRight'>
<div className='userDetails' onMouseMove={()=>{setprofile(true)}}  onMouseOut={()=>{setprofile(false)}} ><h4><LuCircleUserRound className='icons'/>Welcome , {welcome}<IoIosArrowDown className='icons'/></h4></div>
<div ></div>
</div>

</div>
{profile &&(<div className='profileMenu'  >
      <div className='profileMenuCtn'  onMouseMove={()=>{setprofile(true)}}  onMouseOut={()=>{setprofile(false)}}>
<h6 className='menuButton' >My Profile</h6>
      <h6 className='menuButton'>Update Details</h6>
      <h6 className='menuButton'>Change Password</h6>
      <h6 className='logoutButton' onClick={()=>{signin()
setlogin(emptyLogin)
}}>Logout <MdOutlineLogin className='icony' /></h6>

      </div>
    
      
</div>)}
<div className='heading' >
<div>
<h1>Company List</h1>
<h6>Manage your companies easily</h6>
<hr/>
</div>
</div>

<div className='listCompany' >
    <div className='listCompanyctn' >
<table >
<thead>
    <td className='sn'>S.No.</td>
    <td className='companyname'>Company Name</td>
    <td className='gstin' > GSTIN.</td>
    <td className='fy'>Financial Year</td>
</thead>
<tbody  >
{Object.keys(data?.[login.user]?.companies||{}).map((e,index)=>(
    <tr key={index}
    onClick={()=>{setmyCompany(e)
openCompany()
    }}
    ><td>{index+1+"."}</td>
<td>{e}</td>
<td>{data?.[login.user]?.companies[e]?.gstin}</td>
<td>{data?.[login.user]?.companies[e]?.fy}</td>
</tr>))}


</tbody>


</table>


    </div>




</div>
<div className='backdiv' >
<button onClick={()=>{dashboard()}} className='back'><i className='fa-solid fa-arrow-left'></i> Back to Dashboard</button>


</div>



</div>
)
}
export default CompanyList ;