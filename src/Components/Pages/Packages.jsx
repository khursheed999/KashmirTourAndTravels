import ContextStore from "../../ContextStore/ContextStore";
import '../../Styles/packages.css';
import { data } from '../../PackagesData/Data';
import Card from '../UI/Card';
import Container from '../UI/Container';
import DetailedCard from "../UI/DetailedCard";
import { FaArrowRightLong } from 'react-icons/fa6';
import Button from "../UI/Button";
import { useContext, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Packages = () => {
  const [selectOption, setSelectedOption] = useState("*");
  const context = useContext(ContextStore) || {};
  const { cardId, setCardId } = context;

  const NorthKashmir = useMemo(() => data.filter(item =>
    item.district === 'Bandipora' ||
    item.district === 'Baramulla' ||
    item.district === 'Kupwara'
  ), [data]);

  const CentralKashmir = useMemo(() => data.filter(item =>
    item.district === 'Srinagar' ||
    item.district === 'Ganderbal' ||
    item.district === 'Budgam'
  ), [data]);

  const SouthKashmir = useMemo(() => data.filter(item =>
    item.district === 'Anantnag' ||
    item.district === 'Pulwama' ||
    item.district === 'Shopian' ||
    item.district === 'Kulgam'
  ), [data]);

  const Ladakh = useMemo(() => data.filter(item =>
    item.district === 'Leh and Kargil'
  ), [data]);

  const filteredAllData = useMemo(() => ({
    NorthKashmir,
    CentralKashmir,
    SouthKashmir,
    Ladakh,
  }), [NorthKashmir, CentralKashmir, SouthKashmir, Ladakh]);

  const filteredData = useMemo(() => {
    return selectOption === '*' ? data : filteredAllData[selectOption];
  }, [selectOption, data, filteredAllData]);

  const changeCardId = (id) => {
    setCardId(id);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
 
  return (
    <div className="packages" id="top">
      {cardId ? (
        <div className="district-wise">
          <Container classname='heading'>
            <p className="path-indicator">
              <a href="/">Home</a>
              <FaArrowRightLong className="icon" />
              <a href="/Packages">Packages</a>
              <FaArrowRightLong className="icon" />
              {data[cardId - 1].district}
            </p>
          </Container>
          <div className="heading">
            <h2>{data[cardId - 1].district}</h2>
            <p>Exploring Time&gt;&gt;{data[cardId - 1].exploringTime} <br /></p>
          </div>
          <Container
            classname="packages-container"
            staggerContainerVariants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {data[cardId - 1].places.map(item => (
              <DetailedCard key={item.id} item={item} />
            ))}
          </Container>
          <div className="heading">
            <h2>Other Packages</h2>
            <p>district wise</p>
          </div>
          <Container classname="packages-container">
            <nav>
              <ul >
                {[
                  { id: 1, name: 'Srinagar' },
                  { id: 2, name: 'Baramulla' },
                  { id: 3, name: 'Ganderbal' },
                  { id: 4, name: 'Anantnag' },
                  { id: 5, name: 'Bandipora' },
                  { id: 6, name: 'Kupwara' },
                  { id: 7, name: 'Budgam' },
                  { id: 8, name: 'Shopian' },
                  { id: 9, name: 'Kulgam' },
                  { id: 10, name: 'Ladakh' },
                  { id: 11, name: 'Pulwama' }
                ].map(({ id, name }) => (
                  <motion.li
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
                   key={id} onClick={() => { changeCardId(id) }}>
                    <Button classname='link-button' name={<a href="#top">{name} <FaArrowRightLong className='icon' /></a>} />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      ) : 
        <section className='district-wise'>
          <Container classname="packages-container">
            <select className="drop-down-menu" onChange={handleSelectChange}>
              <option value="*" className="option">Show all</option>
              <option value="NorthKashmir" className="option">North Kashmir</option>
              <option value="CentralKashmir" className="option">Central Kashmir</option>
              <option value="SouthKashmir" className="option">South Kashmir</option>
              <option value="Ladakh" className="option">Ladakh</option>
            </select>
          </Container>
          <div className='heading'>
            <h3>Explore Whole Kashmir</h3>
            <p>District Wise</p>
          </div>
          <Container
            classname="packages-container"
            staggerContainerVariants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredData.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </Container>
        </section>
      }
    </div>
  );
};

export default Packages;
