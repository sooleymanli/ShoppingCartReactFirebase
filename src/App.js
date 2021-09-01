import './App.css';
import React, { useState, useEffect } from 'react';
import { NavLink, Route, useHistory } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
import LoginSuccess from './Components/LoginSuccess';
import LoginError from './Components/LoginError';
import RegisterError from './Components/RegisterError';
import RegisterSuccess from './Components/RegisterSuccess';
import 'animate.css/animate.css'
import axiosLink from './Products/Products.json'
import { ProductsContext } from './Context';
import { useLocation } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { db } from "./Firebase"
import { setDoc, doc, onSnapshot,updateDoc } from "firebase/firestore";
import { type } from 'jquery';




function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  
  const [orderCount, setOrderCount] = useState(0)
  const [links, setLinks] = useState("flex")
  const [success, setSuccess] = useState("none")
  const [error, setError] = useState("none")
  const [regError, setRegError] = useState("none")
  const [regSuccess, setRegSuccess] = useState("none")
  const [cart,setCart]=useState({cartdata:[]})
  const [userId,setUserId]=useState("")
  const [userEmail,setUserEmail]=useState("")
  const [regErrMess,SetRegErrMess]=useState("")
  const [logErrMess,SetLogErrMess]=useState("")
  const [userStatus,setUserStatus]=useState(false)
  let changeArray

  const showSuccess = (e) => {
    setSuccess(e)
  }
  const showError = (e) => {
    setError(e)
  }
  const showRegSuccess = (e) => {
    setRegSuccess(e)
  }
  const showRegError = (e) => {
    setRegError(e)
  }

  const regErrMessage=(text)=>{
    SetRegErrMess(text)
  }
  const logErrMessage=(text)=>{
    SetLogErrMess(text)
  }
  const changeLinks = (e) => {
    setLinks(e)
  }

  const handleInCrement = (index) => {
  changeArray=cart.cartdata
  changeArray[index].pieces=changeArray[index].pieces+1
  updateStore(changeArray)
  }

  const handleDeCrement = (index) => {
    changeArray=cart.cartdata
    if(changeArray[index].pieces!==1){
      changeArray[index].pieces=changeArray[index].pieces-1
      updateStore(changeArray)

    }

  }
  const deleteFromCart = (index) => {
   let arrayForDelete = cart.cartdata
   arrayForDelete.splice(index,1)
   updateStore(arrayForDelete)

  }


  async function setStore(changedObject) {
    await setDoc(doc(db, userEmail, "cart"), changedObject);
    
  };

  async function updateStore(array) {
    await updateDoc(doc(db, userEmail, "cart"),{cartdata:array});
    
  };


  let newCartData, elIndex, arrElement

  const addToCart = (indexx) => {
    if (orderCount === 0) {

      setStore({ cartdata: [{ ...axiosLink.products[indexx], "pieces": 1 }] })
    } else {

      newCartData = cart.cartdata
      elIndex = newCartData.findIndex(e => e.id === axiosLink.products[indexx].id)
      if (elIndex >= 0) {
        
        newCartData[elIndex].pieces=newCartData[elIndex].pieces+1
        updateStore(newCartData)

      } else {

        updateStore([...cart.cartdata, { ...axiosLink.products[indexx], "pieces": 1 }])


      }


    }
  }









  const history = useHistory()
  const auth = getAuth()
  const accountOut = (e) => {
    signOut(auth).then(() => {
      history.push("/login")
      setLinks("none")
    }).catch((error) => {
      // cixis olunmadi
    });

  }

  let newData,cartNum

  useEffect(() => {
  

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLinks("flex")


      
        setUserStatus(true)
        setUserId(user.uid)
        setUserEmail(user.email)
        

        onSnapshot(doc(db, user.email, "cart"), (doc) => {
          newData = doc.data()
           cartNum = 0

          if (newData !== undefined) {
            newData.cartdata.map((e) => {
              cartNum = cartNum + e.pieces
            })
            setOrderCount(cartNum)
            setCart(newData)
            
          } else {
            setLinks("none")

            setOrderCount(0)
            setCart({cartdata:[]})
          }
          


        });


    


      } else {
        setUserStatus(false)

      }
    })


 


  },[])

 
  return (

    <ProductsContext.Provider value={axiosLink.products} >
      <div className="App">
        


        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >





        <LoginSuccess show={success} />
        <LoginError show={error} message={logErrMess}  />

        <RegisterSuccess regShow={regSuccess} />
        <RegisterError regShow={regError} message={regErrMess} />

        <Route exact path="/" component={Login} />
        
     
        <Route exact path="/login">
          <Login showFunc={showSuccess} changeLinks={changeLinks} showError={showError} logErrMessage={logErrMessage} />
        </Route>
        <Route exact path="/register">
          <Register showRegSuccess={showRegSuccess} showRegError={showRegError}  regErrMessage={regErrMessage} />
        </Route>
        <Route exact path="/products">
          <Products add={addToCart}  orderCount={orderCount} accountOut={accountOut}/>
        </Route>
        <Route exact path="/cart">
          <Cart newData={cart} delete={deleteFromCart} in={handleInCrement} de={handleDeCrement} orderCount={orderCount} orderCount={orderCount} accountOut={accountOut} button={Boolean(orderCount)} userId={userId}  userEmail={userEmail}/>
        </Route>



      </div>
    </ProductsContext.Provider>
  );
}

export default App;
