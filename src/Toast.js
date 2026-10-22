import './Toast.css';
function Toast({name,color,close}){

    return(
<div>
<div className="container">
              <div className="toast_ctn">
                <div style={{backgroundColor:"color"}} className="toast">{name}<span onClick={close} >X</span></div></div></div>


</div>

    )
}
export default Toast ;