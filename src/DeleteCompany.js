import logo from './logo/logo.png';
import './DeleteCompany.css';
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
import Toast from './Toast';




function DeleteCompany(){
      const{register,setregister,data,setdata,login,setlogin}=useContext(Mycontext)
      const welcome= data[login.user]?.fullName|| "Guest";
      const navigate = useNavigate()
   function signin(){
      navigate('/')
   }
   function dashboard(){
      navigate('/Dashboard')
   }
   const emptyLogin={user:"", passward:""}
   const [profile,setprofile]=useState(false)
   const [showModal, setShowModal] = useState(false);
const [selectedCompany, setSelectedCompany] = useState("");
return(
<div>
<div className="headerdc"><div className="logo1" ><img src={logo}  /> </div>
<div className='headerRightdc'>
<div className='userDetailsdc' onMouseMove={()=>{setprofile(true)}}  onMouseOut={()=>{setprofile(false)}} ><h4><LuCircleUserRound className='icons'/>Welcome , {welcome}<IoIosArrowDown className='icons'/></h4></div>
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
<div className='headingdc' >
<div>
<h1>Delete Company</h1>
<h6>Delete your Existing companies</h6>
<hr/>
</div>
</div>

<div className='listCompany' >
    <div className='listCompanyctndc' >
<table >
<thead>
    <td className='sn'>S.No.</td>
    <td className='companyname'>Company Name</td>
    <td className='gstin' > GSTIN.</td>
    <td className='fy'>Financial Year</td>
</thead>
<tbody   >
{Object.keys(data?.[login.user]?.companies||{}).map((e,index)=>(
    <tr key={index} onClick={() => {
        setSelectedCompany(e)
        setShowModal(true)
       
        
      }}><td>{index+1+"."}</td>
<td>{e}</td>
<td>{data?.[login.user]?.companies[e]?.gstin}</td>
<td>{data?.[login.user]?.companies[e]?.fy}</td>

</tr>))}


</tbody>


</table>


    </div>




</div>
<div className='backdiv' >
<button onClick={()=>{dashboard()}} className='backdc'><i className='fa-solid fa-arrow-left'></i> Back to Dashboard</button>


</div>
{showModal && (
  <div className="modalOverlay">
    <div className="modalBox">
      
      <h5><i className='fa-solid fa-skull-crossbones'></i>    Are you sure you want to delete {selectedCompany} ?</h5>
<div className='modalButton' >
      <button
        onClick={() => {
          let allData = { ...data };

          let updatedCompanies = Object.fromEntries(
            Object.entries(allData[login.user].companies).filter(
              ([companyName]) => companyName !== selectedCompany
            )
          );

          allData[login.user].companies = updatedCompanies;

          setdata(allData);
          

          setShowModal(false);
        }}
      >
        Yes, Delete
      </button>

      <button onClick={() => setShowModal(false)}>
        Cancel
      </button></div>
    </div>
  </div>
)}


</div>
)
}
export default DeleteCompany ;