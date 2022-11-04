import React from 'react'
import '../Styles/style.css';
import {  AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";
const Footer = () => {
  return (
    <div className="footer">
        <div className="foot">
            <div className="line">

            </div>
            <p>Winny Ogele</p>

            <div className="line">

            </div>

        </div>

    

     <div className="footer-icons">
     <IconContext.Provider value={{ className: "foot-icons" }}>
                        <a href="#">
                        <AiOutlineTwitter />
                        <AiFillLinkedin />
                        </a>
      </IconContext.Provider>

     </div>
    

      <p>Copyright &copy; Nkay Ogele</p>
    </div>
  )
}

export default Footer