import React from 'react';

const SocialNetwork = () => {

  const anim = () => {
    const icons = document.querySelectorAll(".social-network a")
    
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX -20}px, ${e.offsetY -13}px)`
      });
  
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
    



  return (
    <div className='social-network'>
      <ul className='content'>
        <a href="https://github.com/21Cle" target='_blank' rel="noopener noreferrer" className='hover' onMouseOver={anim}>
          <li>
            <i className='fab fa-github'></i>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/clemence-vt/" target='_blank' rel="noopener noreferrer" className='hover'onMouseOver={anim}>
          <li>
            <i className='fab fa-linkedin'></i>
          </li>
        </a>
        <a href="https://www.instagram.com/lgdcl/?hl=fr" target='_blank' rel="noopener noreferrer" className='hover'onMouseOver={anim}>
          <li>
            <i className='fab fa-instagram'></i>
          </li>
        </a>

      </ul>
    </div>
  );
};

export default SocialNetwork;