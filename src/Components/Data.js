import React from 'react'
import './Data.css'
import Footer from './Footer'
import ProductCard from './ProductCard'


function Data(data) {

    return (
        <div className="data ">
            <div className="data-body">
                <div className="data-content">
                    {data.data.map((e,index) =>{
                        if (data.category === "all") {
                            return (
                                <ProductCard title={e.caption} key={e.id} description={e.description} price={e.price} image={e.imageurl} rating={e.rating}  add={data.add} index={index}/>)
                        }
                        else if (data.category === "electronics") {
                            if(e.category === "electronics"){
                            return (
                                <ProductCard title={e.caption} key={e.id} description={e.description} price={e.price} image={e.imageurl} rating={e.rating} add={data.add} index={index}/>)
                        }}

                        else if (data.category === "jewelery") {
                            if(e.category === "jewelery"){
                            return (
                                <ProductCard title={e.caption} key={e.id} description={e.description} price={e.price} image={e.imageurl} rating={e.rating}  add={data.add} index={index}/>)
                        }}

                        else if (data.category === "woman") {
                            if(e.category === "woman"){
                            return (
                                <ProductCard title={e.caption} key={e.id} description={e.description} price={e.price} image={e.imageurl} rating={e.rating} add={data.add} index={index} />)
                        }}

                        else if (data.category === "man") {
                            if(e.category === "man"){
                            return (
                                <ProductCard title={e.caption} key={e.id} description={e.description} price={e.price} image={e.imageurl} rating={e.rating} add={data.add} index={index} />)
                        }}




                    })}


                </div>
                <div className="footer-div">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Data;





{/* <div className="cart-mains animate__animated animate__fadeInUpBig animate__delay-0.7s">
<div className="cart-bodys">
   <div className="notCart"><i className="fas fa-exclamation-circle"></i>  Daxil olmamağınız səbə ilə bu səhifəyə baxa bilməzsiz! </div>
</div>
</div> */}