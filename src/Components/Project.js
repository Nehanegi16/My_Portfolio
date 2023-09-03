import React from 'react'
import './style.css';

const Project = () => {
  const projectsData = [
    {
      title: 'Amazon Clone',
      description: 'This Website is clone of Amazon website which look similar to that.',
      image: 'Amazon_clone.png', // Replace with your project image URL
      technologies: 'HTML, CSS',
      link: 'https://nehanegi16.github.io/AmazonClone/',
    },
    {
      title: 'Flower_Shop Website',
      description: 'Built a responsive flower shop web application',
      image: 'Flower_shop.png', // Replace with your project image URL
      technologies: 'HTML, CSS',
      link: 'https://nehanegi16.github.io/Flowershop/',
    },
    {
      title: 'Landing Page',
      description: 'Responsive Landing Page',
      image: 'Landing_page.png', // Replace with your project image URL
      technologies: 'HTML, CSS',
      link: 'https://nehanegi16.github.io/LandingPage/',
    },
    {
      title: 'House_Design Website',
      description: 'Responsive web Design ',
      image: 'Home_design.png', // Replace with your project image URL
      technologies: 'HTML,css,bootstrap',
      link: 'https://nehanegi16.github.io/HomeDesign/',
    },
    {
      title: 'BMI-Calculator',
      description: 'Using this you can Calculator your Boby-Mass-Index',
      image: 'BMI_Calculator.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/BMI_Calculator/',
    },
    {
      title: 'Bubble Game',
      description: 'Bubble Game Contain Score,Timer,hits ',
      image: 'Bubble_Game.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/Bubble_Game/',
    },
    {
      title: 'Calculator',
      description: 'Calculator',
      image: 'Calculator.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/Calculator/',
    },
    {
      title: 'Digital_Clock',
      description: 'Calculator',
      image: 'Digital_Clock.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/DigitalClock/',
    },

    {
      title: 'Tic-Tac-Toe Game',
      description: 'This Two Player Game',
      image: 'Tic-Tac-Toe.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/Tic-Tac-Toe-Game/',
    },
    {
      title: 'Random Joke Generator',
      description: 'It shows Random Jokes',
      image: 'Random_joke.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/RandomJoke_App/',
    },
    {
      title: 'Weather App',
      description: 'You Can check Weather Report of different cities and states',
      image: 'Weather_App.png', // Replace with your project image URL
      technologies: 'HTML, CSS,javascript',
      link: 'https://nehanegi16.github.io/Tempapp/',
    },

    // Add more project objects as needed
  ];
  
  return (
    <div>
     
     <div className="projects-section">
        <h2>My Works</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} style={{backgroundSize:"cover",height:"150px",width:"325px"}}/>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            </div>
          ))}
        </div>
      </div>
      </div>


  )
}

export default Project