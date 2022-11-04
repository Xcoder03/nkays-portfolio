import React from 'react'
import {  AiFillLinkedin, AiFillSlackSquare } from 'react-icons/ai';
import { IconContext } from "react-icons";
import '../Styles/style.css';


const Icons = () => {
  return (
    <div className="Icons">

<IconContext.Provider value={{ className: "top-react-icons" }}>
    <a href="#">
    <AiFillSlackSquare />
    <AiFillLinkedin />
    </a>
  </IconContext.Provider>
  
    </div>
  )
}

export default Icons