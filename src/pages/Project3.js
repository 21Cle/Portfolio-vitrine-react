import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3}/>
        <Buttons left={"/projet-2"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project3;
