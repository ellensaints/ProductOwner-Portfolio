import React from 'react';
import './components/Portfolio.css'; // Certifique-se de que o caminho está correto
import ellenImg from './ellen.jpeg'; 
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Resume from './components/Resume';

function App() {
  return (
    <div className="portfolio">
      <div className="header">
        <img src={ellenImg} alt="Foto de Perfil" className="profile-photo" />
        <div className="title-container">
          <h1>Ellen Santos</h1>
          <h3>Product Owner</h3>
        </div>
      </div>
      <div className="content">
        <About />
        <Projects />
        <Certifications />
        <Experience />
        <Resume />
      </div>
    </div>
  );
}

export default App;
