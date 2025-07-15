import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="experience">
      <h2
        onClick={toggleOpen}
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        Experiência Profissional
        <span className="icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>
      {isOpen && (
        <ul className="experience-list">
          <li className="experience-item">
            <img src="./agile.png" alt="Agile Connect" className="company-logo" />
            <div className="experience-details">
              <h3>Product Owner</h3>
              <p>Agile Connect</p>
              <p>nov de 2023 - até o momento | Curitiba, Paraná, Brasil</p>
              <p>
                Responsável pelo rollout de novos produtos e funcionalidades, organizando e priorizando o backlog da equipe de Desenvolvimento.
                Ritos Ágeis: conduzo as cerimônias de daily stand-up, planejamento de sprint, revisão de sprint e retrospectiva de projeto.
                Dados: Levanto análise de esforços, além de criação e manutenção de relatórios no Power BI garantindo estimativas precisas.
                Gestão de produto: tenho contato direto com clientes para coleta de requisitos e definição de regras de negócio, da concepção à entrega.
                Colaboração: aproximação e vivência diária com times de desenvolvimento e design para alinhar entregas aos objetivos do cliente.
              </p>
              <br></br>
              <p>
                🛠️ Responsável por:
                • Apoiar na construção e desenvolvimento de funcionalidades.
                • Facilitar esclarecimentos e discussões entre as equipes envolvidas.
                • Participar na tomada decisões estratégicas e definição de caminhos a seguir.
                • Revisar desenho de processos operacionais e de negócio.
                • Testes e suporte às implantações além de acompanhar usabilidade do sistema.
                • Gerar e monitorar indicadores de desempenho.
                • Reunir e validar requisitos em reuniões com stakeholders.
              </p>
              <br></br>
              🎯 Qualificações atuais:
              • Experiência com análise de sistemas, mapeamento de processos e suporte à área de tecnologia.
              • Comunicação clara e objetiva com áreas de negócio e equipes técnicas.
              • Perfil analítico, com foco em resolução de problemas e atenção a detalhes.
              • Organização para documentação de requisitos e decisões de projeto.
              • Boa oratória e capacidade de argumentação.

              <p>Competências: Gestão de produtos, Descoberta de produtos, Lançamento de produtos, Levantamento de requisitos, Gestão do ciclo de vida do produto, Gerenciamento de backlog.</p>
            </div>
          </li>

          <li className="experience-item">
            <img src="./trybe.png" alt="Trybe" className="company-logo" />
            <div className="experience-details">
              <h3>Instrutora de Programação</h3>
              <p>Trybe</p>
              <p>jun de 2021 - jul de 2023 |2 anos e 1 mês Minas Gerais, Brasil</p>
              <p>
                Como Instrutora de Desenvolvimento Web, tive o privilégio de ensinar e orientar estudantes em uma ampla variedade de domínios técnicos.
                Minha atividades diárias incluíram: Domínio de comandos Linux, GitHub, HTML5, CSS, JavaScript, APIs, Flexbox, Testes Unitários, entre outros.
                💡 Realizar sessões individuais de mentoria técnica, abordando dúvidas dos alunos e fornecendo orientação prática.
                💡 Ministrar esporadicamente aulas ao vivo para mais de 150 participantes em ambientes virtuais, garantindo experiências de aprendizado interativas e envolventes.
                💡 Criar conteúdo educacional em vídeo para facilitar a compreensão de assuntos complexos.
                💡 Elaborar programas de mentoria e projetos técnicos para aprimorar as habilidades práticas dos alunos.
              </p>
              <p>Competências: GitHub, CSS, Planejamento de projetos, Git, Comunicação, Trabalho em equipe, HTML, Criatividade, Responsabilidade, JavaScript, Análise de dados, Codificação de front-end.</p>
            </div>
          </li>

          <li className="experience-item">
            <img src="./ag.png" alt="Andrade Gutierrez" className="company-logo" />
            <div className="experience-details">
              <h3>Desenvolvedora | Suporte Técnico</h3>
              <p>Andrade Gutierrez S.A.</p>
              <p>set de 2019 - abr de 2021 |1 ano e 7 meses | Rio de Janeiro e Região, Brasil</p>
              <p>
                Acompanhamento das atividades diárias do setor, treinamento e desenvolvimento contínuo de sistemas para o Comissionamento.
                🔹 Desenvolvimento do Sistema Gerenciador de E-mail - Desenvolvido na IDE Spring Tool Suite, utilizando Java como linguagem de back-end e banco de dados SQLServer.
                🔹 Tecnologias front-end: HTML5, CSS3, Bootstrap e JavaScript.
                🔹 Suporte e treinamento aos usuários do sistema EPCCOM.
                🔹 Acompanhamento diário das atividades em aberto ao setor do Comissionamento no sistema OBRASOFT.
              </p>
              <p>Competências: Análise de requisitos, Desenvolvimento de software, Tomada de decisão, Comunicação, Trabalho em equipe, Suporte para Help Desk, Planejamento estratégico, Análise de dados.</p>
            </div>
          </li>

          <li className="experience-item">
            <img src="./cps.png" alt="Cedaspy" className="company-logo" />
            <div className="experience-details">
              <h3>Instrutora de Informática</h3>
              <p>Cedaspy</p>
              <p>dez de 2016 - ago de 2019 | 2 anos e 9 meses | Manaus e Região, Brasil</p>
              <p>
                Planejamento e desenvolvimento de estratégias educacionais voltadas para a qualificação profissional de jovens, fornecendo orientação especializada nas técnicas relevantes para cada módulo.
                📚 Elaboração de material pedagógico personalizado.
                💼 Módulos de ensino abrangentes: Sistemas Operacionais, Desenvolvimento de Sites, Desenvolvimento de Jogos, Marketing Digital, entre outros.
                🚀 Desenvolvi e entreguei programas de formação de alto impacto, capacitando os alunos para enfrentarem os desafios do mundo profissional.
              </p>
              <p>Competências: Microsoft Excel, Planejamento de projetos, Comunicação, Gestão de projetos, HTML, Criatividade, Planejamento estratégico, Melhoria contínua, Análise de dados.</p>
            </div>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Experience;
