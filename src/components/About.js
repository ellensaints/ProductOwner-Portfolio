import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './About.css'; // Certifique-se de criar ou importar o CSS

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="about">
      <h2 
        onClick={toggleOpen} 
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        Quem Sou
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <div>
          <p>
            Atuando na tecnologia desde 2013, sou formada em Sistemas de Informação, com especializações em Gerenciamento Ágil de Projetos e Docência. 👩🏽‍💻
          </p>
          <p>
            Atualmente, como Product Owner, minhas principais atividades incluem:
            <ul>
              <li>Liderar reuniões de planejamento de sprint e refinamento de backlog.</li>
              <li>Colaborar com a equipe de desenvolvimento para garantir entregas de qualidade.</li>
              <li>Trabalhar diretamente com clientes para entender suas necessidades e expectativas.</li>
              <li>Traduzir requisitos em melhorias e funcionalidades de produtos.</li>
              <li>Utilizar Azure DevOps, Jira e Power BI para gerenciar e otimizar projetos.</li>
            </ul>
          </p>
          <p>
            Sou apaixonada por educação e ensino, sempre buscando crescimento pessoal e profissional. Estou me especializando na Escola PM3. 👩🏽‍🏫
          </p>
          <p>
            Tenho experiência em gestão de projetos e ferramentas como Clarizen e Confluence, além de linguagens de programação como Python e JavaScript, aplicadas em soluções inovadoras. 💻
          </p>
          <p>
            Entusiasta da diversidade, estou aberta a novas culturas e oportunidades. Vamos trocar ideias ou tomar um café? Estou à disposição! ☕
          </p>
          <p>
            Animada para expandir minha rede de contatos! 🤝
          </p>
        </div>
      )}
    </section>
  );
}

export default About;
