import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: {duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.3 },
      x: -100,

    }
  }

  return (
    <div>
      <Mouse />
      <motion.div className='home' initial="initial" animate="visible" exit="exit" variants={variants}>
        <Navigation />
        <SocialNetwork />
          <div className="home-main">
            <div className="main-content">
              <motion.h1 drag dragConstraints={{
                left: -250,
                right: 900,
                top: -200,
                bottom: 250,
              }}>Clémence Vert</motion.h1>
              <motion.h2 drag dragConstraints={{
                left: -250,
                right: 900,
                top: -200,
                bottom: 250,
              }}><DynamicText /></motion.h2>
            </div>
          </div>
          <Buttons right={"/intro"} />
      </motion.div>
    </div>
  );
};

export default Home;
