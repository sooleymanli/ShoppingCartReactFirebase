import React,{useState,useEffect} from 'react'
import './Cart.css'
import CartItem from './CartItem'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Navbar from './Navbar'
import Order from './Order'
import OrderSuccessMessage from './OrderSuccessMessage'

function Cart(props) {
   const [content,setContent]=useState("none")
   const [out,setOut]=useState(false)
   const [orderBody,setOrderBody]=useState("none")
   const[user,setUser]=useState(null)
   const[orderSuccess,setOrderSuccess]=useState("none")

   const orderBodyFunc=()=>{
    setOrderBody("flex")
   }

   const hideOrderBody=()=>{
    setOrderBody("none")

   }

   const showSuccess=()=>{
    setOrderSuccess("flex")
    setTimeout(()=>{
        setOrderSuccess("none")

    
    },3000)
   }
    const auth=getAuth()
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setContent(true)
                setOut(true)
                setUser(user)
             


    
            }else{
                setContent(false)
                setOut(false)

    
            }
        })},[])








        

    let totalPrices =0
    return (

<div id="body">
<Navbar   orderCount={props.orderCount} accountOut={props.accountOut} out={out}/>
<OrderSuccessMessage  show={orderSuccess}/>
<Order  show={orderBody} hideOrderBody={hideOrderBody} user={user} products={props.newData.cartdata} success={showSuccess} userId={props.userId} userEmail={props.userEmail}/>
{(content===true)?(<div className="cart-main animate__animated animate__fadeInUpBig animate__delay-0.7s">
<div className="cart-body">

    <div className="cart-content">
        <div className="cart-data-items">
         
            {props.newData.cartdata.map((e,index)=>{
               
               totalPrices  =(totalPrices +e.price*e.pieces)
                return(
                    
                    <CartItem key={index} caption={e.caption} description={e.description}  imageurl={e.imageurl} price={e.price} pieces={e.pieces} delete={props.delete} index={index} in={props.in}  de={props.de}/>
                )
            })}
       
        
        </div>



        <div className="totals"> 
<div className="totals-body">
<div className="totals-content">
<div className="totals-caption">
<h2>Səbət</h2>

</div>
<div className="totals-information">
<div className="totals-count"><span>Məhsul sayı:</span><strong>{props.orderCount}</strong></div>
<div className="subtotals"><span>Cəmi məbləğ:</span><strong>{totalPrices} </strong> <span>₼</span></div>
</div>
<div className="order-button">
<button onClick={orderBodyFunc} style={{display:props.button?"block":"none"}}><a href="#body">Sifariş et</a></button>
</div>
</div>
</div>
        </div>
    </div>
</div>
</div>
):(<div className="cart-mains animate__animated animate__fadeInUpBig animate__delay-0.7s">
<div className="cart-bodys">
   <div className="notCart"><i className="fas fa-exclamation-circle"></i>  Daxil olmamağınız səbəbi ilə bu səhifəyə baxa bilməzsiniz! </div>
</div>
</div>)}

        </div>
    )
}

export default Cart;