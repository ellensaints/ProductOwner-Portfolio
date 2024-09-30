import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Resume.css';

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="resume">
      <h2 onClick={toggleOpen} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Currículo
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <a href="seu_curriculo.pdf" download>Baixar Currículo</a>
      )}
    </section>
  );
}

export default Resume;
