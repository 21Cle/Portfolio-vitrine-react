import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1}/>
        <Buttons left={"/intro"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
