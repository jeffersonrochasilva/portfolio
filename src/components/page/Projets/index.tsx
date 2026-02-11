import "./projectsCamp.css";
import Img1 from "../../../assets/cpt1.png";
import Img2 from "../../../assets/cpt2.png";
import Img3 from "../../../assets/cpt3.png";
const ProjectsCamp = () => {
  const projects = [
    {
      title: "Viana & Lima Advocacia",
      description:
        "Site institucional desenvolvido para escritório de advocacia, com foco em credibilidade, apresentação clara dos serviços jurídicos e facilidade de contato para novos clientes.",
      link: "https://vianaelima.netlify.app/",
      image: Img1,
    },
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
      link: "https://control-of-proccess.netlify.app/",
      image: Img3,
    },
  ];

  return (
    <section className="projects">
      <h2 className="titles">Meus Projetos</h2>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={item.image} alt="Projeto" />
            </div>

            <div className="project-content">
              <h3 className="titles">{item.title}</h3>
              <p className="texts">{item.description}</p>
              <button
                className="project-button"
                onClick={() => window.open(item.link, "_blank")}
              >
                Ver Projeto
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectsCamp;
