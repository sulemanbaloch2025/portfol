import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './work.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. Work Experience'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='Work'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description'>
        <span className='about__link'>  May 2023 - Aug 2023 | Software Engineering Intern | Sports Excitement<br/></span>
        Coordinated with 10 developers to create a MERN web app for career and education, attracting 1,000 pre-launch users. Integrated MongoDB API, improved deployment with React CI/CD pipeline, and enhanced security with standardized JWT token authentication for 1,000+ user profiles<br/>

        <span className='about__link'>  May 2023 - Aug 2023 | Online Programming Instructor | ID Tech Camps<br/></span>
        Instructed diverse programming languages and Machine Learning for UPENN high school programs. Achieved 98% accuracy in handwriting recognition and conducted user study with 90% satisfaction rate.<br/>

       
        <span className='about__link'>  May 2022 - Aug 2022 | Software Engineering Intern | Tenzer Technology Center<br/></span>
        Built MERN app, improving Chemistry students' test scores by 45%. Enhanced load time by 40% with code splitting. Designed high-performance RESTful API for 10,000+ requests/sec. Achieved 99.9% uptime for MongoDB database.


        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
   

      </div>
    </div>
  );
};

export default Work;
