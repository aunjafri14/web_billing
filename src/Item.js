import './Item.css';
import { useState } from 'react';
import { Mycontext } from './App';
import { useContext } from 'react';
function Item(){
    const {taxRate,unit,item,setitem,login,data,setdata,sele,setmyCompany,myCompany
        
    }=useContext(Mycontext);
const [create,setcreate]=useState(false)
const initialState = {name:"",alias:"",category:"",unit:"",tax:"",hsn:"",opstock:"",opvalue:"",sprice:"",pprice:"",des:""}
    function handleChange(e){
const{name,value}=e.target;
setitem(prev=>({...prev,[name]:value}))
    }
    return(
        <div className='mainitem' >
<div className='itemCtn'>
{!create &&(<><div className='title_item'><h3>Create Item</h3></div>
<div  className='details'>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Name :</label><input name='name' value={item.name} onChange={handleChange} type='text' /></div>
    <div className='det-ctn' ><label>Alias :</label><input name='alias' value={item.alias} onChange={handleChange} type='text' /></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Category :</label><input onChange={handleChange} name='category' type='text' value={item.category} /></div>
    <div className='det-ctn' ><label>Unit :</label><select onChange={handleChange} value={item.unit} name='unit' ><option value="" disabled>Select Unit</option>
        {unit.map((unit,i)=>(<option key={i}>{unit}</option>))}</select></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Tax Rate :</label><select onChange={handleChange} value={item.tax} name='tax' ><option value="" disabled>Select Tax Rate</option>
        {taxRate.map((tax,i)=>(<option key={i}>{tax}</option>))}</select></div>
    <div className='det-ctn' ><label>HSN :</label><input onChange={handleChange} value={item.hsn} name='hsn' type='numeric' /></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Op. Stock :</label><input type="number"   name='sprice' value={item.sprice} onChange={handleChange} /></div>
    <div className='det-ctn' ><label>Op. Value :</label><input type='number' name='opvalue' value={item.opvalue} onChange={handleChange} /></div>
</div>
<div className='det-wrap '>
    <div className='det-ctn' ><label>Sale Price :</label><input type='text' name='sprice' value={item.sprice} onChange={handleChange} /></div>
    <div className='det-ctn' ><label>Purchase Price :</label><input type='text' name='pprice' value={item.pprice}  onChange={handleChange} /></div>

</div>
<div className='det-wrap-des '>
    <div className='det-ctn' ><label>Description :</label><input type='text' onChange={handleChange} name='des' value={item.des} /></div>
    

</div>

<div className='item_btn' ><button>Back</button><button 
onClick={() => {if(item.name && item.alias && item.category && item.unit && item.tax){
  setdata(prev => ({
    ...prev,
    [login.user]: {
      ...prev[login.user],
      companies: {
        ...prev[login.user]?.companies,
        [myCompany]: {
          ...prev[login.user]?.companies?.[myCompany],
          items: {
            ...prev[login.user]?.companies?.[myCompany]?.items,
            [item.name]: item
          }
        }
      }
    }
  }));}
  setitem(initialState)
setcreate(true)
setTimeout(()=>{
setcreate(false)
},2000
)
}}>Add</button></div>



</div></>)}
{create &&(
  <div className='created' >
<div>
    <div className='addItem' ><div><i className='fa-solid fa-check-circle'></i></div> </div>
    
    <h1>Item Created Succesfully !</h1></div>
     </div>)}


</div>


        </div>
    )
}

export default Item;
