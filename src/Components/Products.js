import React, { useContext,useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import Data from './Data'
import './Products.css'
import { ProductsContext } from '../Context'
import Navbar from './Navbar'
import {getAuth,onAuthStateChanged} from 'firebase/auth'


export default function Products(props) {
    const value = useContext(ProductsContext)

const [category,setCategory]=useState('all')
const [out,setOut]=useState(false)

const changeCategory =(e)=>{
setCategory(e)
}
const auth=getAuth()

useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
          
            setOut(true)

         



        }else{
     
            setOut(false)


        }
    })},[])




    return (
        <div>
      <Navbar  orderCount={props.orderCount} accountOut={props.accountOut} out={out}/>
        <div className="products">
<Sidebar bos=""   changeCategory={changeCategory} />
<Data data={value}  category={category} add={props.add} />


        </div></div>
    )
}
