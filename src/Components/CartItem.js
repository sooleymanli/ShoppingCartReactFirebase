import React, {useState,useEffect} from 'react'
import './Cart.css'

export default function CartItem(props) {
    const {caption,description,imageurl,price,pieces,index} = props
    



const plus=(index)=>{
  props.in(index)
}
   
const minus=(index)=>{

props.de(index)
    
  
}

const deleteItem=(index)=>{
    props.delete(index)
    

}
    return (
        <div className="cart-data-item">
        <div className="left">
            <div className="cart-data-item-img" style={{backgroundImage:`url(${imageurl})`}}></div>
            <div className="right-in-left">
                <div className="cart-data-item-caption">{caption}</div>
                <div className="cart-data-item-description">{description}</div>
                <div className="cart-data-item-price"><strong>{price} </strong> ₼</div>
            </div>
        </div>
        <div className="right">

            <div className="close-body">
                <div className="close" onClick={deleteItem.bind(this,index)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>

            <div className="cart-data-item-count">
                <button onClick={minus.bind(this,index)}>-</button>
                <input type="number" id="input-count" value={pieces}  readOnly/>
                <button onClick={plus.bind(this,index)}>+</button>
            </div>

        </div>
    </div>
    )
}
