import React, { useState } from 'react'
import {MdCancel} from "react-icons/md";
import '../components/styles/ShoppingCart.css'

const RemoveCart = () => {
    const [show, setShow] = useState(true);
  const toggle = ()=>{
    return setShow(!show)
  }
  return (
    <div>
        <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
                console.log(show)
              }} />
    </div>
  )
}

export default RemoveCart