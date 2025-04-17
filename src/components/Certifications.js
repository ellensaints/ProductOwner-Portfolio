import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Certifications.css';

function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="certifications">
      <h2 
        onClick={toggleOpen} 
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        Certificados
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <ul className="certification-list">
          <li>
            <a href="https://gerarcertificado.com.br/validar.php?cert=588e47d28fdb5f4a2f61366d705f9594" target="_blank" rel="noopener noreferrer">
              <img src="./logo-pm3.jpg" alt="Certificado 1" className="certification-image" />
              <h3>Product Discovery</h3></a>
              <p>Da Ideação à Realização:</p>
              <p>Uma Jornada de Descoberta</p>
          </li>
          <li>
            <a href="https://gerarcertificado.com.br/validar.php?cert=6c71f5f54d3a8d6e50470fe99c085047" target="_blank" rel="noopener noreferrer">
              <img src="./logo-pm3.jpg" alt="Certificado 2" className="certification-image" />
              <h3>Product Management</h3></a>
              <p>Gerenciamento Eficaz:</p>
              <p>Dominando o Ciclo de Vida do Produto</p>
          </li>

          <li>
            <a href="https://gerarcertificado.com.br/validar.php?cert=d49cc2d60527e9c54ea2dba42ed23382" target="_blank" rel="noopener noreferrer">
              <img src="./logo-pm3.jpg" alt="Certificado 1" className="certification-image" />
              <h3>Especialista em Produto</h3></a>
              <p>Capacitada para otimizar cada etapa </p>
              <p>do ciclo de vida do produto.</p>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Certifications;
