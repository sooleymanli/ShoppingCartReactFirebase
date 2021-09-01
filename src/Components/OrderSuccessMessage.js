import React from 'react'
import './Success.css'

export default function OrderSuccessMessage(props) {
    return (
        <div className="success"  style={{top:"20%"}}>
            <div className="success-body animate__animated animate__fadeInDownBig animate__delay-0.2s" style={{display:props.show,backgroundColor:"green",color:"#fff"}}>
            <span>Sifariş verilmişdir!</span><i className="fas fa-check-circle" style={{color:"#fff"}}></i>
            
            </div>
           
        </div>
    )
}
