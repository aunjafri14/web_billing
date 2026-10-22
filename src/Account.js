import { useContext, useState } from 'react';
import './Account.css';
import { Mycontext } from './App';
function Account(){
const {countryStateData,account,setaccount,accountCategory,gstRegistrationType,setscreen,screen,setdata,login,myCompany,data}= useContext(Mycontext);
const [create,setcreate]=useState(false)
function handleChange(e){
const {name,value}=e.target;
setaccount(prev=>({...prev,[name]:value}));
}
const initialState ={name:"",alias:"",category:"",opening:"",address:"",country:"",state:"",type:"",gstin:"",mobile:"",mail:""}


    return(
        <div className='mainitem' >
<div className='itemCtn'>
{!create &&(<><div className='title_item'><h3>Create Account</h3></div>
<div  className='details'>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Name :</label><input value={account.name} name='name' onChange={handleChange} type='text' /></div>
    <div className='det-ctn' ><label>Alias :</label><input value={account.alias} name='alias' onChange={handleChange} type='text' /></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Category :</label><select name='category' onChange={handleChange} value={account.category}  ><option disabled value="">Select Account Category</option> {accountCategory.map((cat,i)=>(<option key={i} >{cat}</option>))}</select></div>
    <div className='det-ctn' ><label>Opening Bal. :</label><input name='opening' onChange={handleChange} value={account.opening} type='text' /></div>
</div>
<div className='det-wrap-des '>
    <div className='det-ctn' ><label>Address :</label><input type='text' value={account.address} name='address' onChange={handleChange}  /></div>
    </div>  
    <div className='det-wrap '>
    <div className='det-ctn' ><label>Country :</label><select onChange={handleChange} value={account.country} name='country' ><option disabled value="">Select Country</option>
   {Object.keys(countryStateData).map((country,i) =>(<option key={i}>{country}</option>))}</select> </div>
    <div className='det-ctn' ><label>State :</label><select onChange={handleChange} value={account.state} name='state' ><option disabled value="">Select State</option>
   {countryStateData[account.country]?.map((state,i) =>(<option key={i}>{state}</option>))}</select></div>

</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Dealer Type :</label><select value={account.type} onChange={handleChange} name='type' ><option disabled value="">Select Dealer Type</option>
        {gstRegistrationType.map((type,i)=>(<option key={i}>{type}</option>))}</select></div>
    <div className='det-ctn' ><label>GSTIN :</label><input type='text' value={account.gstin} onChange={handleChange}  name='gstin'/></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Mobile No. :</label><input name='mobile' value={account.mobile} onChange={handleChange} type='text' /></div>
    <div className='det-ctn' ><label>E-mail :</label><input name='mail' value={account.mail} onChange={handleChange} type='text' /></div>
</div>



<div className='ac_btn' ><button onClick={()=>{setscreen(prev=>({...prev,home:true,account:false}))}} >Back</button>
<button
onClick={() => {
  if(account.name && account.category)
  {
  setdata(prev => ({
    ...prev,
    [login.user]: {
      ...prev[login.user],
      companies: {
        ...prev[login.user]?.companies,
        [myCompany]: {
          ...prev[login.user]?.companies?.[myCompany],
          accounts: {
            ...prev[login.user]?.companies?.[myCompany]?.account,
            [account.name]: account
          }
        }
      }
    }
  }));
setaccount(initialState)
setcreate(true)
setTimeout(()=>{
setcreate(false)
},2000
)
}

}}
>Add</button></div>



</div></>)}
{create &&(
  <div className='created' >
<div>
    <div className='addItem' ><div><i className='fa-solid fa-check-circle'></i></div> </div>
    
    <h1>Account Created Succesfully !</h1></div>
     </div>)}


</div>


        </div>
    )
}

export default Account;
