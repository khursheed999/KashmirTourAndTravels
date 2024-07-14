import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from '../PackagesData/Data';
import '../Styles/imgSlides.css';
import { motion } from 'framer-motion';


const ImgSlides=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging: (i) => <div className="custom-dot" />,
      };
return <motion.div 

className='container1'>
     <Slider {...settings} className="imageslider1">
{data.map((item) =>
  item.places.map((item2) => (
    <motion.div key={item2.id} >
      <h4>{item2.destination}</h4>
      <motion.img
      initial={{opacity:0,
        x:-200,
      }}
      whileInView={{opacity:[0,0,0.3,0.7,0.8,.9,1],
        x:[200,150,100,50,25,10,0]
      }}
      transition={{
        duration:2,
        ease:'linear',
      }}
        
        src={item2.image}
        alt={item2.destination}
      />
    </motion.div>
  ))
)}
</Slider>
</motion.div>
}
export default ImgSlides;