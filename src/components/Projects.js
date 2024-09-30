import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="projects">
      <h2 
        onClick={toggleOpen} 
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        Projetos
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <ul>
          <li>
            <a 
              href={`${process.env.PUBLIC_URL}/case-ellen.pdf`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Case Produto 
            </a>
          </li>
          <li>
            <a 
              href="https://pt.slideshare.net/slideshow/entendendo-o-ciclo-de-vida-de-um-produto/271510533" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ciclo de vida do produto
            </a>
          </li>
          <li>
            <a 
              href="https://pt.slideshare.net/slideshow/metodologia-agil-projetos-com-flexibilidade-e-colaboracao/271511250" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Metodologia ágil
            </a>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Projects;
