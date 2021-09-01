import { event } from 'jquery'
import React, { useState,useEffect } from 'react'
import './Order.css'
import {setDoc,doc,onSnapshot,updateDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import {db} from '../Firebase'

export default function Order(props) {

    const [operatorNum,setOperatorNum]=useState("")
    const [telNum,setTelNum]=useState("")
    const [errOperatorNum,setErrOperatorNum]=useState("none")
    const [errTelNum,setErrTelNum]=useState("none")
const [history,setHistory]=useState({})
const [userEmail,setUserEmail]=useState(props.userEmail)
const [userId,setUserId]=useState(props.userId)

    

const telChange = (e)=>{
let tel =e.target.value
let newTel = tel.slice(0,7)
setTelNum(newTel)
}
const opChange = (e)=>{
    let tel =e.target.value
    let newTel = tel.slice(0,3)
    setOperatorNum(newTel)
    }


    async function setOrder(object) {
        await setDoc(doc(db, userEmail, "history"), object);
        
      };

      async function setStore(changedObject) {
        await setDoc(doc(db, userEmail, "cart"), changedObject);
        
      };
     

      async function updateHistory(newArray) {
        await updateDoc(doc(db, userEmail, "history"),{array:newArray});
        
      };
   
const auth=getAuth()
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        
  
  
            onSnapshot(doc(db, user.email, "history"), (doc) => {

                let historyS=doc.data()
                setHistory(historyS)
                
                
                    })
                
  
  
        } else {
          console.log("giris yoxdur")
  
        }
      })













  

  


    
}, [])


const orderFinish = (e)=>{
    e.preventDefault()
   
  
    let d=new Date()
    let day= d.getDate()
    let month =d.getMonth()
    month=month+1
    let year = d.getFullYear()
    let newDate =`${day}.${month}.${year}`
    


    if(telNum!==""&&operatorNum!==""){
        props.success()
    


        if(history===undefined){
          
            setOrder({array:[{ date:newDate,
                products:[...props.products],
                phone:`(+994) (${operatorNum}) ${telNum} `}]
               
            })
            
          
           
        }else{
           
            updateHistory([...history.array,{ date:newDate,
                products:[...props.products],
                phone:`(+994) (${operatorNum}) ${telNum} `}])
                
        }
           

        setStore({cartdata:[]})
        props.hideOrderBody()



       
    }else{
  if(telNum===""){
setErrTelNum("3px solid red")
  } else{
    setErrTelNum("none")

  }
if(operatorNum===""){
      setErrOperatorNum("3px solid red")
  }else{
    setErrOperatorNum("none")

  }
    }


}






    return (
        <div className="order animate__animated animate__fadeInDownBig " style={{display:props.show}}>
        <div className="order-body">

<h2>Sifariş et</h2>
<div className="tel-input">
<form onSubmit={orderFinish}>
    <div className="order-inputs">
<input type="text" id="country-number"  defaultValue="+994" />
<input type="number" id="operator-number"  placeholder="050" value={operatorNum}  onChange={opChange} style={{border:errOperatorNum}}/>
<input type="number" id="tel" placeholder="9993366"   value={telNum} onChange={telChange} style={{border:errTelNum}}/>
</div>
<div className="order-buttons">
<input type="submit" id ="submit"value="Sifariş ver" />
<input type="button" id ="cancel"value="Ləğv et" onClick={props.hideOrderBody}/>
</div>
</form>

</div>

        </div>
            
        </div>
    )
}
