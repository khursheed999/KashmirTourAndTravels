import "../../Styles/footer.css";
import customerServiceMan from '../../assets/customer-service.png';
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaSnapchatSquare} from 'react-icons/fa';
import {FaSquarePhone} from 'react-icons/fa6';
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
const Footer=()=>{
    
    
    return <footer >
            
    <motion.div
     initial={{opacity:0,
      y:100,
    }}
    whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
      y:[200,150,100,50,25,12,6,3,2,1,0],
    }}
    transition={{
      duration:4,
      ease:'linear',
    }}
    viewport={{once:true}}
     className="footer-content"
  >     
        <motion.div
         initial={{opacity:0,
          y:100,
        }}
        whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
          y:[200,150,100,50,25,12,6,3,2,1,0],
        }}
        transition={{
          duration:4,
          ease:'linear',
        }}
        viewport={{once:true}}
        className="footer-section-about"
      >
            <hr />
            <h3
          >About us</h3>
        <h4
      >Welcome to Kashmir Tour and Travels
        </h4>
        <p
      >
          

Discover the breathtaking beauty of Kashmir with us. At Kashmir Tour and Travels, we offer personalized packages that cater to all your travel needs. Whether you're seeking adventure, relaxation, or cultural exploration, we have something for everyone.
        </p>
         
</motion.div>
<motion.div 
 initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
className="footer-section-links"
>
    <hr />
    <h3
  >Helpful Links</h3>
    <nav>
        <ul>
            <li
          >
                <a href="/">Home</a>
            </li>
            <li
          >
                <a href="/Packages">Packages</a>
            </li>
            <li
          >
                <a href="/About">About us</a>
            </li>
            <li
          >
                <a href="/Contact">Contact Us</a>
            </li>
        </ul>
    </nav>
</motion.div>
<motion.div 
 initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
className="customer-service"
>
    <hr />
  <h3
>Customer Service</h3>
    <motion.div 
     initial={{opacity:0,
      y:100,
    }}
    whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
      y:[200,150,100,50,25,12,6,3,2,1,0],
    }}
    transition={{
      duration:4,
      ease:'linear',
    }}
    viewport={{once:true}}
    className="contact-details"
  >
      <img
     src={customerServiceMan}
       alt='customer-service'
       height='100px' 
       width='100px'/>
        <p
      >Contact Details <br />
        <a 
       
        href="tel: +918494040457"> <FaSquarePhone className="icon"/> Call Now</a>
    <br />
    <a
  
     href="mailto:khursheedahmadrah29@gmail.com"> <IoMail className="icon"/> Mail Now
    </a>
    </p>
    </motion.div>
   

</motion.div>
<motion.div
 initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
className="footer-section-contact"
>
    <hr />
    <h3
  >Follow with us</h3>
    <motion.div
     initial={{opacity:0,
      y:100,
    }}
    whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
      y:[200,150,100,50,25,12,6,3,2,1,0],
    }}
    transition={{
      duration:4,
      ease:'linear',
    }}
    viewport={{once:true}}
  >
        <span
      >
        <FaFacebookSquare className="icon"/>
        </span>
        <span
      >
        <FaInstagramSquare className="icon"/>
        </span>
        <span
      >
        <FaTwitterSquare className="icon"/>
        </span>
        <span
      >
        <FaSnapchatSquare className="icon"/>
        </span>
    </motion.div>
</motion.div>
<motion.div 
 initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
className="footer-bottom"
>
    <hr />
    <p
  >Copyright &copy; 2024 Kashmir Tour and Travels. All rights reserved. <br />
    Website Designed and Developed by <em>Khursheed Ahmad Rah</em>
    </p>
</motion.div>
           </motion.div>
        
            
        
    </footer>
};
export default Footer;