import React from 'react';
import TimelineItem from './TimelineItem';
import AnimatedBackground from '../contact/AnimatedBackground';
import './projects.css';


//List for projects: title,desc,details,image,repolink,date
const projects = [
  {
    title: 'Personal Website: hwe',
    description: 'My own personal website to showcase my skills and passions. Showcase my abiltities for software engineering and development.',
    details: 'Personally developped a user-friendly, responsive website to showcase my skills, projects, and my personal and professional exerpeince. This design features a sleek design with cohesive navation and interactive elements that provide a large overview of my work.',
    imgSRC: '/images/personalweb.png',
    repoLink: 'https://github.com/Tr0llinMe/hweport',
    date: 'May 2024'
  },
  {
    title: 'Capstone: NotifyMe Application',
    description: 'A navigation application catered to students to streamline their commuting experience.',
    details: 'Worked as a full-stack developer within the project in order to learn the general workflow and architecture for this application. The website is able to give navigations for any mode of transport users need, with traffic congestion % also included for users to decide their directions. It also includes an hour-to-hour traffic detail to show when the best time users should leave.',
    imgSRC: '/images/NotifyMeSystem.png',
    repoLink: 'https://github.com/Tr0llinMe/Navigation-TMU',
    date: 'January 2024'
  },
  {
    title: 'Anomaly Detection: Training Model',
    description: 'Worked as a predecessaor for NotifyMe. Created a training model to detect road anomalies.',
    details: 'Worked as the main developer for this project. The training mdoel is used to detect whether or not the road conditions are suitable for vehicles to drive in. It uses a CNN model for the learning process, with making use of computer vision in order to detect any issues with the pictures. The training set is then organized so that it can be later used to retrain the model.',
    imgSRC: '/images/anomalydetection.png',
    repoLink: 'https://github.com/Tr0llinMe/Anomaly-Road-Detection',
    date: 'November 2023'
  },
  //If more is needed add in chrono
];


function Projects() {
  return (
    <div className= "projects">
      <AnimatedBackground />
      <h2>My Projects</h2>
      <div className= "timeline">
        {projects.map((project, index) => (
          <TimelineItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
