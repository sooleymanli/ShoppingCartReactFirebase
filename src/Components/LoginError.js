import React from 'react'
import './Error.css'

export default function LoginError(props) {
    return (
        <div className="error"  >
            <div className="error-body animate__animated animate__fadeInDownBig animate__delay-0.2s" style={{display:props.show}}>
            <span>{props.message} </span><i className="fas fa-exclamation-circle"></i>
            
            </div>
           
        </div>
    )
}
