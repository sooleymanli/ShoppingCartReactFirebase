import React, { useState,useEffect } from 'react'

import { Link,useHistory  } from 'react-router-dom';
import './Login.css'
import app from '../Firebase'
import  {getAuth,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"



function Login(props) {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [status,setStatus]=useState(false)
    
const auth = getAuth()
let history = useHistory();


const redirectRegister=()=>{
    history.push("/register");

}

const handleSignIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((e)=>{
props.showFunc("flex")
setTimeout(()=>{
    props.showFunc("none")
    // props.changeLinks("flex")

    history.push("/products");
  
},2000)


    
    
    })
    .catch((error)=>{
        console.log(error.code)

        if(error.code ==="auth/invalid-email"){
            props.logErrMessage("Email-in yazılışı doğru deyil")
        }else if(error.code ==="auth/user-not-found"){
            props.logErrMessage("Belə bir istifadəçi mövcud deyil")

        }else if(error.code==="auth/wrong-password"){
            props.logErrMessage("Şifrəniz yalnışdır!")

        }


props.showError("flex")
setTimeout(()=>{
    props.showError("none")

},4000)

        
    })
}

useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
           
                setStatus(true)
              
       

        }else{
            setStatus(false)

        }
    })
}, )


        return (
       <div>{status?(<div className="login">
                <div className="login-body">
    <div className="false-body ">
               <div className="false-buttons">
                   <Link to="/products" style={{textDecoration:"none"}}><span>Məhsullar</span></Link>
                   <Link to="/cart" style={{textDecoration:"none"}}><span>Səbət</span></Link>
               </div>
               </div>

                </div>
               </div>

    
):(<div className="login ">
    <div className="login-body animate__animated animate__fadeInDownBig animate__delay-0.7s ">
   <div className="login-content">
<div className="login-caption">
Giriş
</div>
<hr></hr>
<div className="login-form">
<div className="email">
<input type="email" name="email" id="email" placeholder="Email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className="password">
<input type="password" name="password" id="password" placeholder="Şifrə" autoComplete="off"  onChange={(e)=>setPassword(e.target.value)}/>
</div>

<div className="login-footer">

<div className="register-class">
    {/* <Link to="/register" className="register-link">Qeydiyyat</Link> */}
</div>

<div className="login-submit">
    <button onClick={redirectRegister}><i className="fas fa-user-plus" style={{marginRight:"10px"}}></i> Qeydiyyat</button>
    <button onClick={handleSignIn}><i className="fas fa-sign-in-alt" style={{marginRight:"10px"}}></i>Giriş</button>
</div>
</div>

</div>
</div>

</div>
</div>
)}</div>

            
            
        )
    
}

export default Login;