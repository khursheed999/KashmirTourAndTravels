import { motion} from 'framer-motion';
import '../../Styles/detailedCard.css';


const DetailedCard=({item})=>{
    const staggerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.35,
          },
        },
      };
    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        transition:{staggerChildren:0.2},
        scale:[0,0.3,0.6,0.8,1],
        
      };
    return  <div >
         <motion.div 
    variants={itemVariants}
    className='packages-detailed-info'>
        <div
         className="img-container left">
            <motion.img 
             initial={{opacity:0,
              y:100,
            }}
            whileInView={{opacity:[0,0.1,0.3,0.5,0.7,0.8,.9,1],
              y:[200,150,100,50,25,12,6,3,2,1,0],
              
            }}
            transition={{
              duration:3,
              ease:'linear',
            }}
      viewport={{once:true}}
      
          
            src={item.image} alt={item.destination} />
        </div>
        <motion.p
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
       
        className='data-container '>
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
           <h1 >{item.destination}</h1>
           <h3 >{item.distance}</h3>
           </motion.div>
            <motion.p
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

            >{item.description}</motion.p>
        </motion.p>
     </motion.div>
    </div>
}
export default DetailedCard;