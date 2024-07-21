import '../Styles/bookingForm.css';
import Button from './UI/Button';
import { key } from '../SecretFile';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { verticalFRmotion, horizantalFRMotion } from '../Animation/Framer-motion';

const BookingForm = () => {
  const navigate = useNavigate();
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3wj8atp', 'template_gd81ql8', form.current, key)
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
          e.target.reset();
          navigate('/');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  
  return (
    <motion.form
    {...verticalFRmotion}
      ref={form}
      onSubmit={sendEmail}
      className="Contact-form"
      
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
      <motion.div
      {...horizantalFRMotion}
      >
        <input type="text" placeholder="Enter Name" required name="user_name" />
      </motion.div>
      <motion.div
      {...horizantalFRMotion}
      >
        <input type="email" placeholder="Email" required name="user_email" />
      </motion.div>
      <motion.div
      {...horizantalFRMotion}
      >
        <textarea placeholder="Write message here!" required name="message" />
      </motion.div>
      <motion.div
      {...horizantalFRMotion}
      >
        <Button name="Book Now" type="submit" value="Send" classname="submit-button" />
      </motion.div>
    </motion.form>
  );
}

export default BookingForm;
