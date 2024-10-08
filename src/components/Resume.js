import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEnvelope } from 'react-icons/fa'; // Importando o ícone de envelope
import './Resume.css';

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="resume">
      <h2 onClick={toggleOpen} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Fale Comigo
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <>
          <p>📧 <a href="mailto:ellencssp@gmail.com">ellencssp@gmail.com</a>
          </p>
          📲 Telefone: <a href="https://wa.me/5592991271033" target="_blank" rel="noopener noreferrer">(92) 99127-1033</a>
          <p>
            🧟‍♀️ GitHub: <a href="https://github.com/ellensaints?tab=overview&from=2023-12-01&to=2023-12-31" target="_blank" rel="noopener noreferrer">ellensaints</a>
          </p>
          <p>
            👩🏽‍💻 LinkedIn: <a href="https://www.linkedin.com/in/ellensaints/" target="_blank" rel="noopener noreferrer">ellensaints</a>
          </p>
          <br />
          📄 <a href="ellen-ProductOwner-cv.pdf" download>Baixar Currículo</a>
          <div className="contact-info" style={{ marginTop: '20px' }}>
            <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
              Vamos tomar um café e conversar ☕.<br></br>
              Conexões são oportunidades disfarçadas. Vamos construir juntos! 🌟


            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default Resume;
