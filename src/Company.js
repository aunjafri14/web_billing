import './Company.css'
import { Mycontext } from './App';
import { useContext, useState } from 'react';
import logo from './logo/logo.png'
import background from './logo/background.png'
import Sales from './Sales';
import Item from './Item';
import Account from './Account';
import { FaRegUser } from 'react-icons/fa';

function Company(){
    const {myCompany,setmyCompany,screen, setscreen}=useContext(Mycontext)
const [menu,setmenu]=useState({master:false,transaction:false,reports:false,User:false,setting:false})
const [menu2,setmenu2]=useState({account:false,item:false,sale:false,purchase:false,payment:false,reciept:false,journal:false
})


    return(
        <div className='compWrap'>

<div className='compCtn'>
 
<div className='side'>
 <div className='img' >
<img className='comlogo' src={logo} /></div>  

<div className='compMenu' ><span><i className='fa-solid fa-home'></i> Home  </span> </div>

<div className='compMenu' onClick={()=>{if(menu.master===false){setmenu(prev=>({...prev,master:true}))}else{setmenu(prev=>({...prev,master:false}))};}} ><span  ><i className='fa-solid fa-layer-group'></i> Masters  </span><i className='fa-solid fa-caret-down'></i> </div>
{menu.master &&(<><div className='compMenu' onClick={()=>{if(menu2.account===false){setmenu2(prev=>({...prev,account:true}))}else{setmenu2(prev=>({...prev,account  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Account  </span> </div>
{menu2.account &&(<>
<div className='compMenu' onClick={()=>{setscreen(prev=>({...prev,account:true,home:false}))}} ><span>{" o  "}Add</span> </div>
<div className='compMenu' ><span>{"o "}Modify</span> </div>
<div className='compMenu' ><span>{"o "}List</span> </div></>)}
<div className='compMenu' onClick={()=>{if(menu2.item ===false){setmenu2(prev=>({...prev,item:true}))}else{setmenu2(prev=>({...prev,item  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Item  </span></div></>)}
{menu2.item && menu.master &&(<>
<div className='compMenu'  onClick={()=>{setscreen(prev=>({...prev,item:true,home:false}))}} ><span><i className='fa-solid fa-dot-circle'></i>Add</span> </div>
<div className='compMenu' ><span><i className='fa-solid fa-dot-circle'></i>Modify</span> </div>
<div className='compMenu' ><span>{"o "}List</span> </div></>)}



<div className='compMenu' onClick={()=>{if(menu.transaction===false){setmenu(prev=>({...prev,transaction:true}))}else{setmenu(prev=>({...prev,transaction:false}))};}} ><span><i className='fa-solid fa-file-invoice'></i> Transaction </span><i className='fa-solid fa-caret-down'></i> </div>
{menu.transaction &&(<>
<div className='compMenu' onClick={()=>{if(menu2.sale ===false){setmenu2(prev=>({...prev,sale:true}))}else{setmenu2(prev=>({...prev,sale  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Sale  </span> </div>
{menu2.sale &&(<><div className='compMenu' ><span><i className='fa-solid fa-circle small-dot'></i> Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}
<div className='compMenu' onClick={()=>{if(menu2.purchase ===false){setmenu2(prev=>({...prev,purchase:true}))}else{setmenu2(prev=>({...prev,purchase  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Purchase  </span> </div>
{menu2.purchase &&(<><div className='compMenu' ><span>Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}
<div className='compMenu' onClick={()=>{if(menu2.payment ===false){setmenu2(prev=>({...prev,payment:true}))}else{setmenu2(prev=>({...prev,payment  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Payment  </span> </div>
{menu2.payment &&(<><div className='compMenu' ><span>Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}
<div className='compMenu' onClick={()=>{if(menu2.reciept ===false){setmenu2(prev=>({...prev,reciept:true}))}else{setmenu2(prev=>({...prev,reciept :false}))};}} ><span> <i className='fa-solid fa-caret-right'></i> Recipt  </span> </div>
{menu2.reciept &&(<><div className='compMenu' ><span>Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}
<div className='compMenu' onClick={()=>{if(menu2.journal ===false){setmenu2(prev=>({...prev,journal:true}))}else{setmenu2(prev=>({...prev,journal  :false}))};}} ><span><i className='fa-solid fa-caret-right'></i> Journal  </span> </div></>)}
{menu2.journal && menu.transaction &&(<><div className='compMenu' ><span>Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}



<div className='compMenu' onClick={()=>{if(menu.reports===false){setmenu(prev=>({...prev,reports:true}))}else{setmenu(prev=>({...prev,reports:false}))};}} ><span><i className='fa-solid fa-chart-column'></i> Reports  </span><i className='fa-solid fa-caret-down'></i> </div>
{menu.reports &&(<><div className='compMenu' ><span>Balance Sheet  </span> </div>
<div className='compMenu' ><span>Profit and loss  </span> </div>
<div className='compMenu' ><span>Trail Balance </span> </div>
<div className='compMenu' ><span>Account Ledger </span> </div>
<div className='compMenu' ><span>Stock Status</span> </div>
<div className='compMenu' ><span>Sales Register  </span> </div>
<div className='compMenu' ><span>Purchase Register</span> </div></>)}




<div className='compMenu' onClick={()=>{if(menu.User===false){setmenu(prev=>({...prev,User:true}))}else{setmenu(prev=>({...prev,User:false}))};}} ><span><i className='fa-solid fa-user-circle'></i> User  </span><i className='fa-solid fa-caret-down'></i> </div>
{menu.User &&(<><div className='compMenu' ><span>Add</span> </div>
<div className='compMenu' ><span>Modify</span> </div>
<div className='compMenu' ><span>List</span> </div></>)}

<div className='compMenu' ><span><i className='fa-solid fa-gear'></i> Settings  </span><i className='fa-solid fa-caret-down'></i> </div>
<div className='compMenu'  ><span><i className='fa-solid fa-sign-out'></i> Logout  </span> </div>




</div>
{screen.account && (<Account/>)}
{screen.sales &&(<Sales/>)}
{screen.item &&(<Item/>)}

{screen.home &&(<div className='home'>
    <div className='compDetails' >
    <div className='first' >
    <h1>Demo Pvt.Ltd.</h1>
    
    <h4>{`GSTIN : 09AAGRF233HK5`}</h4></div>

    <div className='second' >
        <div>
<h4><i className='fa-solid fa-calendar'></i> F.Y. : 2025-26 <i className='fa-solid fa-angle-down'></i></h4></div>| 
<div><h4><i className='fa-solid fa-user-circle' ></i> Admin <i className='fa-solid fa-angle-down'></i></h4></div>
</div>
</div>
<img className='compBackground' src={background}/>

</div>)}


</div>

<div className='about' > <div>
   <h5>--------------------------------------</h5> 
    <h5><i className='fa-solid fa-copyright'></i> 2026 Web Billing </h5> 
<h5>Version 1.0</h5>
<h5>Developed by Aun Mohammad</h5></div>
</div>



        </div>
    )
}

export default Company;