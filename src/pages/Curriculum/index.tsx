import { BiUser, BiFile, BiBook } from "react-icons/bi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaUniversity, FaDownload } from "react-icons/fa";
import "./curriculum.css";
import Invite from "../../components/curricuum/Invite";
const Curriculum = () => {
  const dowonloadCurriculum = () => {
    alert("ainda não está pronto Baby");
  };
  return (
    <div className="containers">
      <button
        onClick={() => dowonloadCurriculum()}
        className="button"
        style={{ marginTop: "40px" }}
      >
        Baixar meu curriculo <FaDownload style={{ marginLeft: "10px" }} />
      </button>
      <div className="curriculum-cotnainer">
        <span className="titles" style={{ padding: "0 10px" }}>
          JEFFERSON ROCHA DA SILVA
        </span>
        <div className="curriculum-info">
          <p className="texts">
            São Paulo - São Paulo - (11) 91770-6038 - 32 anos, casado
          </p>
          <p className="curriculum-text">jeffersonrochadasilva667@gmail.com</p>
          <a
            href="
            https://github.com/jeffersonrochasilva
          "
            className="curriculum-text"
            style={{ cursor: "pointer" }}
          >
            https://github.com/jeffersonrochasilva
          </a>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <BiUser color="#ff9602" size={32} />
            <span className="curriculum-title-card">Objetivo Profissional</span>
          </div>
          <span className="curriculum-text-card">
            Tech Lead / Desenvolvedor Front-End Web/Mobile Pleno
          </span>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <BiFile color="#ff9602" size={32} />
            <span className="curriculum-title-card">Resumo Profissional</span>
          </div>
          <span className="curriculum-text-card">
            Profissional com mais de 4 anos de experiência em desenvolvimento
            front-end e mobile, especializado em Vue, React Native, React.js e
            Next.js. Atualmente atuando como desenvolvedor web, com forte
            experiência em equipes, implementação de arquiteturas escaláveis e
            otimização de performance em aplicações.
          </span>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <BiBook color="#ff9602" size={32} />
            <span className="curriculum-title-card">
              Experiência Profissional
            </span>
          </div>
          <span className="curriculum-title-card" style={{ color: "#ff9602" }}>
            Freelancer
          </span>
          <span
            className="texts"
            style={{ fontSize: "14px", marginLeft: "10px" }}
          >
            agosto de 2024 - (2 anos e 4 meses)
          </span>
          <ul>
            <li>
              Desenvolvimento e manutenção de aplicações web para comercio.
            </li>
            <li>Manuteção e otimização de projetos já em uso.</li>
            <li>Manutenção em redes de acessos de Empresas.</li>
            <li>Criação de APIs e banco de dados de grandes fluxos.</li>
            <li>gestão em segurança de dados.</li>
          </ul>
          <span className="curriculum-title-card" style={{ color: "#ff9602" }}>
            Signa Consultoria e Sistemas
          </span>
          <span
            className="texts"
            style={{ fontSize: "14px", marginLeft: "10px" }}
          >
            agosto de 2024 - (2 anos e 4 meses)
          </span>
          <ul>
            <li>Desenvolvimento e manutenção de aplicações mobile e web.</li>
            <li>Otimização de performance e refatoração de código.</li>
            <li>Implementação de padrões arquiteturais e boas práticas.</li>
            <li>Integração de APIs e serviços backend.</li>
          </ul>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <GrPersonalComputer color="#ff9602" size={32} />
            <span className="curriculum-title-card">Habilidades Técnicas</span>
          </div>

          <ul>
            <li>JavaScript, TypeScript, HTML5, CSS3, Python</li>
            <li>
              React.js, React Native, Next.js, Vue.js, Redux, Context API,
              Recoil.js
            </li>
            <li>React Native.</li>
            <li>Criação de APIs e banco de dados de grandes fluxos.</li>
            <li>
              CI/CD, Git, Metodologias Ágeis, Revisão de Código, Arquitetura de
              Software
            </li>
          </ul>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <FaUniversity color="#ff9602" size={32} />
            <span className="curriculum-title-card">Escolaridade</span>
          </div>
          <span
            className="texts"
            style={{ fontSize: "14px", marginLeft: "10px" }}
          >
            Cursando Analize e desenvolvimento de sistemaas - Cruzeiro do Sul
          </span>
        </div>
        <div className="curriculum-card-one">
          <div className="curriculum-content-card">
            <BiFile color="#ff9602" size={32} />
            <span className="curriculum-title-card">Cursos Complementares</span>
          </div>

          <ul>
            <li>HTML5 e CSS3 - Senac</li>
            <li>Introdução a programação - Udacity</li>
            <li>Python - Udemy</li>
            <li>React do zero ao avançado - Udemy</li>
            <li>React Developer - Udacity</li>
            <li>React-Native com TypeScript - Udemy</li>
            <li>React com TypeScript - Udemy</li>
            <li>JavaScript Completo do iniciante ao mestre - Udemy</li>
            <li>Vue JS 2 - Udemy</li>
          </ul>
        </div>
      </div>
      <Invite />
    </div>
  );
};

export default Curriculum;
