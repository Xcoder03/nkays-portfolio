import React from 'react'
import {  AiFillLinkedin, AiFillSlackSquare } from 'react-icons/ai';
import { IconContext } from "react-icons";
import '../Styles/style.css';


const Icons = () => {
  return (
    <div className="Icons">

<IconContext.Provider value={{ className: "top-react-icons" }}>
    <a href="https://www.linkedin.com/in/ebube-chinda-323a48254/">
    <AiFillSlackSquare />
    <AiFillLinkedin />
    </a>
  </IconContext.Provider>
  
    </div>
  )
}

export default Icons