import '../../Styles/card.css'
import { motion } from 'framer-motion';
const Button=({name,classname,onclick,type,value})=>{
    return <motion.button 
    initial={{opacity:1,
    }}
  
    animate={{
        opacity:[0.9,1,1,1,.9],
        scale:[.7,0.8,0.9,1,1,1,1,1,.9,.8,.7],
        boxShadow:['0px 0px 0px rgba(0,0,0,0)','10px 10px 20px rgba(0,0,0,0.5)','0px 0px 0px rgba(0,0,0,0)']
    }}
    transition={{
        repeat:Infinity,
        duration:10,
        ease:"linear"
    }}
  
    type={type}
    value={value}
    onClick={onclick}
    className={classname}>{name}</motion.button>
}
export default Button;