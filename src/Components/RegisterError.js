import React from 'react'
import './Error.css'

export default function RegisterError(props) {
    return (
        <div className="error"  >
            <div className="error-body animate__animated animate__fadeInDownBig animate__delay-0.2s" style={{display:props.regShow}}>
            <span>{props.message} </span><i className="fas fa-exclamation-circle"></i>
            
            </div>
           
        </div>
    )
}
