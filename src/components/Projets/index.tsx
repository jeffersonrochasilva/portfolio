import CardProject from "../commom/CardProject";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./projects.css";
// import Img1 from "../../assets/cpt1.png";
import Img2 from "../../assets/cpt2.png";
import Img3 from "../../assets/cpt3.png";
const Projects = () => {
  const navigate = useNavigate();

  const goToNavigate = () => {
    navigate("/projects");
  };
  const projects = [
    // {
    //   title: "Viana & Lima Advocacia",
    //   description:
    //     "Site institucional desenvolvido para escritório de advocacia, com foco em credibilidade, apresentação clara dos serviços jurídicos e facilidade de contato para novos clientes.",
    //   link: "https://control-of-proccess.netlify.app/",

    //   image: Img1,
    // },
    {
      title: "Vega Imobiliária",
      description:
        "Vitrine online para imobiliária com ênfase em design responsivo, navegação simples e organização de imóveis.",
      link: "https://vegaimobiliaria.netlify.app/home",
      image: Img2,
    },
    {
      title: "Controle de Processos",
      description:
        "Sistema administrativo de controle de processos, com interface intuitiva, gráficos de desempenho e funcionalidades para gerenciamento eficiente.",
      link: "https://vianaelima.netlify.app/",

      image: Img3,
    },
  ];
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
        {projects.map((item) => (
          <CardProject
            projects={true}
            title={item.title}
            text={item.description}
            image={item.image}
          />
        ))}
      </div>
      <div className="box-button">
        <button className="button" onClick={() => goToNavigate()}>
          Ver todos os projetos <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
