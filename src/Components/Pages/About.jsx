import '../../Styles/about.css';
import { motion } from 'framer-motion';
import ScrollToTop from '../../ScrollToTop';
const About=()=>{
  
    return <motion.div className="about"
    >
      <ScrollToTop/>

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
    className='heading'
     >
    <motion.h3 
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
    >
        Welcome to Kashmir Tour and Travels
        </motion.h3>
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
       >
Discover the breathtaking beauty of Kashmir with us. 
At Kashmir Tour and Travels, we offer personalized packages that cater to all your travel needs. 
Whether you're seeking adventure, relaxation, or cultural exploration, we have something for everyone.

</motion.p>
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
className='why-choose-us' 
 
 >
<motion.h3
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
 >
Why Choose Us?
</motion.h3>
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
     >
   <strong>  Expert Local Guides </strong>:
    Our knowledgeable guides ensure you experience the best of Kashmir's landscapes and culture. <br />

   <strong>  Customized Packages </strong>: From honeymoon getaways to family vacations, we tailor each package to suit your preferences. <br />
<strong> Comfortable Accommodations </strong>: Stay in handpicked hotels that offer a perfect blend of comfort and local charm. <br />
 <strong> Adventure Activities </strong> : Explore thrilling options like trekking, skiing, and paragliding amidst stunning mountain backdrops. <br />
<strong> Cultural Experiences </strong>: Immerse yourself in the rich traditions of Kashmir with visits to local markets, historic sites, and cultural events. <br />
 <motion.h3
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
  > 
Popular Destinations 

 </motion.h3>
<strong> Srinagar</strong>: Enjoy a serene Shikara ride on Dal Lake and explore the famous Mughal Gardens.
 <br /><strong>  Gulmarg:</strong> Experience skiing and snowboarding in winter, or take a cable car ride for panoramic views. <br />
 <strong> Pahalgam </strong> : Discover the lush valleys and take part in outdoor adventures like trekking and river rafting. <br />
 <strong>Sonmarg </strong> : Witness the majestic beauty of the "Meadow of Gold," perfect for nature lovers and photographers.
    </motion.p>
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
 className='book-your-adv'
  >

 <motion.h3
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
  >    Book Your Adventure </motion.h3>
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
 > Join us for an unforgettable journey through the paradise on Earth. Contact us today to plan your dream vacation in Kashmir. Whether 
you’re a solo traveler, a couple, or a group, Kashmir Tour and Travels ensures a seamless and memorable experience.
 </motion.p>
 </motion.div>
    </motion.div>
};
export default About;