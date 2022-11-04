import React from 'react'
import '../Styles/style.css';
import { IconContext } from "react-icons";
import {  AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BsFillEnvelopeFill, BsFillTelephoneOutboundFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="contact">
        <div className="get">
            <div className="In-touch">
                <h2>Get In Touch</h2>
                <p>You can reach out to me through my social media links. </p>
                <div className="social">
                        <IconContext.Provider value={{ className: "top-icons" }}>
                        <a href="#">
                        <AiOutlineTwitter />
                        <AiFillLinkedin />
                        </a>
                     </IconContext.Provider>
                </div>
            </div>

            <div className="contacts">
                <div className="email">
                   <IconContext.Provider value={{ className: "icons" }}>
                        <a href="#">
                        <BsFillEnvelopeFill />
                        </a>
                     </IconContext.Provider>
                <p>nkaycity03@gmail.com</p>
                </div>
                <div className="email">
                <IconContext.Provider value={{ className: "icons" }}>
                        <a href="#">
                        <BsFillTelephoneOutboundFill  />
                        </a>
                     </IconContext.Provider>
                <p>+234-8123-98083</p>
                </div>
            </div>

        </div>
      

        <div className="message">
            <div className="main-message">
                <p>Need a Service Provider?</p>
                <h2>Send A Message</h2>
                <form className="form">
                    <input type="text" name="" id="" placeholder="Enter Fullname" />
                    <input type="text" name="" id="" placeholder="Enter Email Address" />
                    <input type="text" name="" id="" placeholder="Enter Message" />
                </form>

                <button>Send Message</button>
            </div>

        </div>
        
    </div>
  )
}

export default Contact