import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. About Me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description'>
          Hello! My name is
          {' '}
          <span className='about__link'>Suleman&nbsp;Baloch</span>
          {' '}
          and I’m a CS major and an undergraduate student at DePauw university in the United States. I have successfully completed 2 software engineering (SDE) internships and served as the president of the International Computer Science Association at DePauw University. Additionally, I have teaching experience in Computer Science at renowned universities such as UPenn for their high school programs.
          {' '}
          Outside of academics, I am a state-level Taekwondo fighter, a fitness enthusiast, and a gamer.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '}
          <br />
          <ul className='about__skillsList'>
            <li className='about__skillsItems'>Javascript(ES6+)</li>
            <li className='about__skillsItems'>Python</li>
            <li className='about__skillsItems'>C++</li>
            <li className='about__skillsItems'>Nodejs</li>
            <li className='about__skillsItems'>Expressjs</li>
            <li className='about__skillsItems'>React.js & Redux</li>
            <li className='about__skillsItems'>MongoDB</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>AWS</li>
            <li className='about__skillsItems'>SQL</li>
            <li className='about__skillsItems'>MERN & MEAN stack</li>
            <li className='about__skillsItems'>HTML</li>
          </ul>
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-python' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
