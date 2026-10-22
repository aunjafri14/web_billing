import './Sales.css';
import Select from 'react-select/base';
function Sales(){
    return(
        <div className='ctnsale' >
            <div className='main' >
                <div className='title'>
                    <h3  >Sales Voucher</h3>  </div> 
<div className="headersale" >
<div  className="date"><label>Date : </label><input type="text" /></div>

<div className="vch" ><label>Vch. No. : </label><input type="text" /></div>

    </div>
    <div className='party'>
        <label>Party Name :</label> <input type='text' /> <i className='fa-solid fa-plus-circle'></i>

    </div>
    <div className='narration'>
        <label>Narration :</label> <input type='text' />

    </div>
    <hr/>
    <div className='caption' ><h3 className='sn'>S.No.</h3>
    <h3 className='des'>Descriptions of Goods</h3>
    <h3 className='qty'>Qty.</h3>
    <h3 className='unit'>Units</h3>
    <h3 className='price'>Price</h3>
    <h3 className='amount'>Amount</h3>

    </div>
    <div className='body'>

    </div>
    
    </div>
        </div>
    )
}
export default Sales ;