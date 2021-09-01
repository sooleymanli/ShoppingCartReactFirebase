import React, { useEffect,useState } from 'react'
import './ProductCard.css'
import Ratings from './Ratings';
import {getAuth,onAuthStateChanged} from "firebase/auth"
import { render } from '@testing-library/react';



 const ProductCard=(props)=>  {
    const auth=getAuth()
    const[button,setButton]=useState(2)
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setButton(1)

        }else{
            setButton(2)


        }
    })
  }, [])
        return (
            <div className="data-item animate__animated animate__zoomInUp animate__delay-0.5s " >
                        <div className="item-body">
                        <div className="img" style={{backgroundImage:`url(${props.image})`}}></div>
                        <span className="title">{props.title} </span>
                        <p className="description">{props.description}</p>
                       <div className="item-footer">
                        <div className="rating">
                        
                       <Ratings  number={props.rating} />
                      

                   
                        </div>
                        <span className="price">{props.price} <span className="current">₼</span></span>
                        </div>
                        </div>
{(button===1)?(<button className="addtocart" onClick={props.add.bind(this,props.index)}><i className="fas fa-shopping-cart"></i>Səbətə əlavə et</button>)  : (<button className="addtocart danger" ><i className="fas fa-exclamation-circle"></i>Giriş etməlisiniz</button>)}

                        {/* <button className="addtocart" onClick={props.add.bind(this,props.index)}><i className="fas fa-shopping-cart"></i>Səbətə əlavə et</button> */}
                        {/* <button className="addtocart danger" ><i className="fas fa-exclamation-circle"></i>Giriş etməlisiniz</button> */}
                    </div>
        )
    
}

export default ProductCard;