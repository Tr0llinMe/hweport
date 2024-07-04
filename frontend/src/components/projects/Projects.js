import React from 'react';
import TimelineItem from './TimelineItem';
import './projects.css';


//List for projects: title,desc,details,image,repolink,date
const projects = [
  {
    title: 'Personal Website: hwe',
    description: 'asdfasdf',
    details: 'asdfasdf',
    imgSRC: '/images/personalweb.png',
    repoLink: 'https://github.com/Tr0llinMe/hweport',
    date: 'May 2024'
  },
  {
    title: 'Capstone',
    description: 'asdfasdf',
    details: 'asdfasdf',
    imgSRC: '/images/NotifyMeSystem.png',
    repoLink: '',
    date: 'January 2024'
  },
  {
    title: 'Project 3',
    description: 'asdfasdf',
    details: 'asdfasdf',
    imgSRC: '',
    repoLink: '',
    date: 'November 2023'
  },
  //If more is needed add in chrono
];


function Projects() {
  return (
    <div className= "projects">
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
