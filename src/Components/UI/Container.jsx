import '../../Styles/container.css';
import {useScroll,useTransform, motion,} from 'framer-motion';
const Container=({children,classname,staggerContainerVariants,initial,animate})=>{ 
    return <motion.div 
    variants={staggerContainerVariants }
    initial={initial}
    animate={animate}
    className={classname} >
      {children}
    </motion.div>

    
}
export default Container;