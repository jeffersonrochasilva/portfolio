import image from "../../../public/Assunto.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./initial.css";
const Initial = () => {
  return (
    <div className="initial">
      <div className="content-initial">
        <span className="titles">Bem-vindo ao meu portfólio!</span>
        <p className="texts">
          Sou desenvolvedor especializado em criar interfaces modernas e
          funcionais. Aqui você encontra alguns dos meus projetos, onde aplico
          JavaScript, React, Tailwind e boas práticas de desenvolvimento para
          transformar ideias em soluções reais. Fique à vontade para explorar!
        </p>
        <button
          onClick={() => alert("ainda Nào está pronto")}
          className="button"
        >
          Conheça meus projetos <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
      <div className="image-box">
        <div className="box one" />
        <div className="box two" />
        <div className="box three" />
        <div className="box four" />
        <img src={image} alt="imagemaltor" className="image-intial" />
      </div>
    </div>
  );
};

export default Initial;
