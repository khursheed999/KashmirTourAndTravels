import BookingForm from "../BookingForm";
import '../../Styles/booking.css'
import { motion } from "framer-motion";
import ScrollToTop from "../../ScrollToTop";
const Booking=()=>{
    return <motion.div className="booking"
    
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
      <ScrollToTop/>
        
        <BookingForm/>
    </motion.div>
};
export default Booking;