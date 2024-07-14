import '../../Styles/contact.css';
import '../../Styles/container.css';
import Button from '../UI/Button';
import { IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci'; 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { key } from '../../SecretFile';
const Contact=()=>{
    const navigate=useNavigate();
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs .sendForm('service_3wj8atp', 'template_gd81ql8', form.current, {
          publicKey: {key},
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Message Send Successfully!");
            e.target.reset();
            navigate('/');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    
    return <motion.div className='contact'
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
className='heading'>
<motion.h3
initial={{opacity:0,
  x:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  x:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:2,
  ease:'linear',
}}
viewport={{once:true}}
>Welcome to Kashmir Tour And Travels</motion.h3>
<motion.p

initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:2,
  ease:'linear',
}}
viewport={{once:true}}

><CiLocationOn className='icon'/> Check S K Bala Hajin, Bandipora <br />
 <IoCallOutline className='icon'/> +91-8494040457 <br />
< CiMail className='icon'/> khursheedahmadrah29@gmail.com</motion.p>
</motion.div>

 <motion.div
 initial={{opacity:0,
  y:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  y:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:2,
  ease:'linear',
}}
viewport={{once:true}}
 className='form-container'
 
 >
 
   <form
ref={form}
onSubmit={sendEmail}
className="Contact-form"
>
<motion.div
initial={{opacity:0,
  x:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  x:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:2,
  ease:'linear',
}}
viewport={{once:true}}>
  <input type="text" placeholder="Enter Name"  name="user_name" />
</motion.div>
<motion.div
initial={{opacity:0,
  x:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  x:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:2,
  ease:'linear',
}}
viewport={{once:true}}
>
  <input type="email" placeholder="Email" name="user_email" />
</motion.div>

<motion.div
initial={{opacity:0,
  x:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  x:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
>
  <textarea type="text" placeholder="Write message here!" name="message"/>
</motion.div>
<motion.div
initial={{opacity:0,
  x:100,
}}
whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
  x:[200,150,100,50,25,12,6,3,2,1,0],
}}
transition={{
  duration:4,
  ease:'linear',
}}
viewport={{once:true}}
>
  <Button name="Book Now"
  type="submit"
  value="Send"
  classname="submit-button" />
</motion.div>
</form>
 </motion.div>
   


    </motion.div>
};
export default Contact;