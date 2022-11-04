import React, {useState} from 'react'
import '../Styles/style.css';
import {  AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";


const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  
  return (
    

    <div className="nav">
            <div className="main-navbar">
                <h2>NKAY</h2>
                <div className={

                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                  <ul>
                       <a href="#hero-section">Home</a>
                    
                    <a href="#about">About</a>
                    <a href="#servicgoes">Services</a>
                    <a href="#project">Project</a>
                  </ul>
              </div>
              
            </div>
            <div className="nav-links">
              
                <IconContext.Provider value={{ className: "top-icons" }}>
                              <a href="https://twitter.com/Xcoder03">
                              <AiOutlineTwitter />
                              <AiFillLinkedin />
                              </a>
                </IconContext.Provider>

                <span class="material-symbols-outlined"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                  menu
              </span>


            </div>
            
        </div>

 

  )
}

export default Navbar