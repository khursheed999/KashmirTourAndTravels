import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css";
import {FaBars  } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md'
import { useState } from "react";
import {IoClose}  from 'react-icons/io5';
import { motion } from "framer-motion";
const Navbar = () => {

    const [active, setActive] = useState('nav-list');
    const showNav = () => {
       
        setActive('nav-list-active');
    }

    const removeNav = () => {
      
        setActive('nav-list');
    }
    return <nav className="navbar">
         
            <section>
                <div className="travel-icon-container">
                <span className="icon">
                        <MdTravelExplore /> 
                    </span>
                   <motion.div className="text"
                    initial={{opacity:0,
                    }}
                  
                    animate={{
                        opacity:[0,.1,.3,0.6,0.8,0.9,1,1,1,.9,.8,.6,.3,.1,0],
                        scale:[.7,0.8,0.9,1,1.1,1.15,1.1,1,.9,.8,.7],
                    }}
                    transition={{
                        repeat:Infinity,
                        duration:10,
                        ease:"linear"
                    }}
                   >
                   <h2>Kashmir</h2><br />
                   <h6>Tour & Travels</h6>
                   </motion.div>
                  

                </div>
                <motion.div
                 whileTap={{
                    transitionDelay:5,
                    ease:'linear'
                 }}
                 onClick={showNav}  
                 className="nav-icon-container">
                    <span className="icon" >
                        <FaBars />
                    </span>
                </motion.div>
            </section>
   <ul
     
    className={active}>
    <motion.span 
    onClick={removeNav} 
    className="icon">
    <IoClose/>
    </motion.span>
   
     <li>
         <NavLink to="/"   >Home</NavLink>
     </li>
     <li>
         <NavLink to="/About" >About us</NavLink>
     </li>
     <li>
         <NavLink to="/Booking" >Booking</NavLink>
     </li>
     <li>
         <NavLink to="/Contact" >Contact </NavLink>
     </li>
     <li>
         <NavLink to="/Packages" >Packages</NavLink>
     </li>
    </ul
    > 
    
        </nav>
    

};
export default Navbar;