import BookingForm from "../BookingForm";
import '../../Styles/booking.css'
import { motion } from "framer-motion";
const Booking=()=>{
    return <motion.div className="booking">
        
        <BookingForm/>
    </motion.div>
};
export default Booking;