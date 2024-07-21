import video1 from '../../assets/videos/morchi.mp4';
import '../../Styles/home.css';
import { motion } from 'framer-motion';
import { data } from '../../PackagesData/Data';
import Card from '../UI/Card';
import Container from '../UI/Container';
import ImgSlides from '../ImgSlides';
import { useMemo } from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop';
const Home = () => {
  const navigate=useNavigate();
  const mostVisitedPackages = useMemo(() => {
    return data.filter(
      (item) =>
        item.district === 'Srinagar' ||
        item.district === 'Ganderbal' ||
        item.district === 'Baramulla' ||
        item.district === 'Anantnag' ||
        item.district === 'Bandipora'
    );
  }, [data]);

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
    transition: { staggerChildren: 0.2 },
    scale: [0, 0.3, 0.6, 0.8, 1],
  };
  const itemVariants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    transition: { staggerChildren: 0.8 },
    scale: [0, 0.3, 0.6, 0.8, 1, 3],
  };
function handleClick(){
  console.log('clicked')
  navigate('/Booking')

}

  return (
    <motion.div
    className="home">
      <ScrollToTop/>

      <motion.section className="background-video">
        <div  className="overlay">
          <motion.h3 
          >Book your Destination</motion.h3>
          <Button name="Book Now"
           classname="booking-button" 
           onclick={handleClick}/>
        </div>
        <motion.video
          src={video1}
          muted
          autoPlay
          loop
          type="video/mp4"
          width="100%"
        ></motion.video>
      </motion.section>
      <div>
       <ImgSlides/>
      </div>
      <section className="home-content-packages ">
        <div className="heading">
          <h3>The Most visited packages</h3>
          <p>District wise</p>
        </div>
        <Container
          classname="packages-container"
          staggerContainerVariants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          
        >
          {mostVisitedPackages.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <div className="heading">
          <h3>Explore Whole Kashmir</h3>
          <p>District wise</p>
        </div>
        <Container
          classname="packages-container"
          staggerContainerVariants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
      </section>
    </motion.div>
  );
};

export default Home;
