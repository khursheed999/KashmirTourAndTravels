import {MdKeyboardArrowRight} from 'react-icons/md';
import '../../Styles/card.css';
import {useNavigate} from 'react-router-dom';
import { useContext, } from 'react';
import ContextStore from '../../ContextStore/ContextStore';
import Button from './Button';
import { motion,useTransform,useScroll } from 'framer-motion';
const Card=({item})=>{
 const {cardId,setCardId}= useContext(ContextStore);
const navigate= useNavigate();
    const {district,image,exploringTime,visitingDestinations,id}=item;
    function handleClick(id){
      console.log(id);
      setCardId(id);
      navigate('/Packages')
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        transition:{staggerChildren:0.2},
        scale:[0,0.3,0.6,0.8,1],
        
      };
  const {scrollY}=useScroll();
  const opacityImg=useTransform(scrollY,[2,5,7,10,12],[0,0.3,0.5,0.9,1]);
    return   <div 
     variants={itemVariants}
    className='package'
    >
      <div className='imgcontainer'>
        <motion.img
        initial={{opacity:0,
          y:100,
        }}
        whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
          y:[200,150,100,50,25,12,6,3,2,1,0],
          
        }}
        transition={{
          duration:3,
          ease:'linear',
        }}
        viewport={{once:true}}
        src={image} alt={district} 
        width='250px'
        height='150px'
        loading='lazy'/>
      
      </div>
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
      className="datacontainer">
        <motion.h6
              initial={{opacity:0,
                x:-100,
              }}
              whileInView={{opacity:[0,.3,0.5,0.7,0.8,.9,1],
                x:[-200,-150,-100,-50,-25,-12,-6,-3,-2,-1,0],
              }}
              transition={{
                duration:4,
                ease:'linear',
              }}
              viewport={{once:true}}
        >{district}</motion.h6 >
        <p>Exploring Time&gt;&gt;{exploringTime} <br />
       <b> Visiting Destinations: </b> <br />
      {visitingDestinations}</p>
      </motion.div>
      <Button 
      classname="button"
      onclick={()=>{handleClick(id)}}
      name={<>more details
         <span className='icon'> <MdKeyboardArrowRight/></span>
      </>} />
     </div>
}
export default Card;