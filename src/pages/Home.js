import '../styles/Home.css';
import React from 'react';

function Home() {

  return (
    <div className="App">
      
      <div className='pic'></div>
      <div className='pic-ovr'></div>
      <div className="content">
        <nav className='home-nav'>
          <a href=''>Home</a>
          <a href='/skills'>Skills</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </nav>

        <div className='center'>
            <div className='logo-box'>
                <img src={require('../styles/logos/cptr-logo.png')} alt='computer logo'/>
            </div>
            <h1>Tucker Humiston</h1>
            <h2>Full-Stack Engineer</h2>
            <p>Welcome to my digital portfolio! I'm a Full Stack Developer with a strong foundation in computer engineering. Explore my projects, skills, and learn more about my journey in the world of technology!</p>
        </div>

        <div className='socials'>
            <a href='https://github.com/tuckerhumiston' target="_blank">
                <img src={require('../styles/logos/github.png')} alt='github logo'/>
            </a>
            <a href='https://www.linkedin.com/in/tucker-humiston' target="_blank">
                <img src={require('../styles/logos/linkedin.png')} alt='linkedin logo'/>
            </a>
            <div className='creds'>
                <a href='https://resume.io/r/m8pdj8lBj' target="_blank">Resume</a>
                {/* Check GPT for possible solutions above */}
                <a href='https://www.codecademy.com/profiles/NexusStack/certificates/ffd0f42cce1a44e9a0108b365047a0a6' target="_blank">Certification</a>
            </div>
  
        </div>  
      </div>
    </div>

  );
}

export default Home;