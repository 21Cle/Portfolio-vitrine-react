import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Intro = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0}/>
        <Buttons left={"/"} right={"/projet-1"} />
      </div>
    </main>
  );
};

export default Intro;
