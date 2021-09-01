import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-body">
                <div className="text"><a href="https://github.com/sooleymanli" target="_blank" rel="noreferrer"  style={{textDecoration:"none"}}>
                    © Süleymanlı Fuad</a></div>
                <div className="link">
                    <a href="https://github.com/sooleymanli" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
