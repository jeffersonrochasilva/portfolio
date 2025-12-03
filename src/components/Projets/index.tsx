import CardProject from "../commom/CardProject";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <div className="box-content">
        <span className="titles">Projetos em Destaque</span>
        <p className="texts">
          Alguns dos meus trabalhos recentes que demonstram minhas habilidades e
          experiência.
        </p>
      </div>
      <div className="cards-projects">
        <CardProject
          projects={true}
          title="Scretorio advocacia"
          text="Projeto criado para controlar andamentos de processos, entrada e conclusão."
        />
        <CardProject
          projects={true}
          title="Scretorio advocacia"
          text="Projeto criado para controlar andamentos de processos, entrada e conclusão."
        />{" "}
      </div>
      <button className="button">Ver todos os projetos</button>
    </div>
  );
};

export default Projects;
