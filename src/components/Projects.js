import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';

const projectData = [
  {
    title: "Case Produto",
    description: "Como Product Owner, conduzi a implementação de uma solução digital para gerenciar despesas de reembolso, simplificando o registro e a aprovação.",
    link: `${process.env.PUBLIC_URL}/case-ellen.pdf`,
    image: "case.png" // Substitua pelo link da sua imagem
  },
  {
    title: "Ciclo de vida do produto",
    description: "Conduzi uma mentoria, explorando o ciclo de vida de um produto e detalhando cada etapa, desde a concepção até o descontinuamento. ",
    link: "https://pt.slideshare.net/slideshow/entendendo-o-ciclo-de-vida-de-um-produto/271510533",
    image: "life.png" // Substitua pelo link da sua imagem
  },
  {
    title: "Metodologia ágil",
    description: "Explorando as práticas da metodologia ágil em projetos. Realização de uma apresentação, abordando seus princípios e práticas fundamentais.",
    link: "https://pt.slideshare.net/slideshow/metodologia-agil-projetos-com-flexibilidade-e-colaboracao/271511250",
    image: "agil.png" // Substitua pelo link da sua imagem
  },
];

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
        <div className="project-cards">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Projeto</a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
