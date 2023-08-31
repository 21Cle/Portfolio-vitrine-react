import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    }
  }



  return (
    <main>
      <Mouse />
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={{duration: 0.5}} className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>Luxembourg ville</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="661998852" className='hover'>
                <p style={{cursor: "pointer"}} className='clipboard' onClick={() => alert('Téléphone copié!')}>+352 661 998 852</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="cvertlegrand@gmail.com" className='hover'>
                <p style={{cursor: "pointer"}} className='clipboard' onClick={() => alert('Email copié!')}>cvertlegrand@gmail.com</p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Designed with React - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-3"} />
      </motion.div>
    </main>
  );
};

export default Contact;
