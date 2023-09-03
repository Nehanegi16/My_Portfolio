import React from 'react'
import './style.css';



const About = () => {
  const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Bootstrap', level: 75 },
    { name: 'Node.js', level: 80 },
  ];
  return (  
  <>
 
 
 <div className="about-section">
      <div className="profile-photo">
        <img src="img.jpeg" alt="Profile" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
      <p>Hi there! I'm Neha, a passionate front-end developer . I specialize in turning creative designs into responsive and interactive web experiences.  With a strong foundation in HTML, CSS, and JavaScript, I'm dedicated to crafting intuitive user interfaces.</p>
        <p>Throughout my journey, I've embraced technologies such as Bootstrap and Node.js to build dynamic and feature-rich applications. My goal is to create web solutions that not only look great but also provide seamless user experiences.</p>
        <p>Outside of coding, I enjoy staying up-to-date with the latest industry trends, experimenting with new libraries</p>
        <p>If you're looking for someone who's enthusiastic about web development and committed to delivering high-quality results, let's connect!</p>
        <div className="skills-list">
          <h3>Skills:</h3>
          <ul>
            {skillsData.map(skill => (
              <li key={skill.name}>
                {skill.name} <span>({skill.level}%) </span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}  
 
      
export default About