import image from "../../../assets/projetos.jpg";
import { FaGithub } from "react-icons/fa";
import "./cardProject.css";
import { FiArrowRight } from "react-icons/fi";

import { useState } from "react";
interface Props {
  title?: string;
  text?: string;
  step?: number;
  projects?: boolean;
}
const CardProject = (props: Props) => {
  const [stepStyle, setStepStyle] = useState(false);

  return (
    <div className="cardProject" onClick={() => setStepStyle(!stepStyle)}>
      {props.projects && (
        <img src={image} alt="logo" className="image-card-project" />
      )}

      <div className="box-description">
        <h2 className="card-title">
          {props.title ? props.title : "nenhum titulo"}
        </h2>
        <p className="card-text">
          {props.text
            ? props.text
            : "Nenhum texto aparentemente enviado para o card"}
        </p>
        <div className="card-box">
          <div className="card-tikets">
            <span className="tiket-name">React</span>
          </div>
          <div className="card-tikets">
            <span className="tiket-name">Typescript</span>
          </div>
          <div className="card-tikets">
            <span className="tiket-name">Tailwind</span>
          </div>
        </div>
        <div className="card-box">
          <div
            className="card-links"
            onClick={() => alert("ainda não está pronto")}
          >
            <FaGithub size={25} className="card-icon" />
            <span className="tiket-name-icon">React</span>
          </div>
          <div
            className="card-links"
            onClick={() => alert("ainda não está pronto")}
          >
            <FiArrowRight size={25} className="card-icon" />
            <span className="tiket-name-icon">Demo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
