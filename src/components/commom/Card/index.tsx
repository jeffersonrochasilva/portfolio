import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import image from "../../../assets/projetos.jpg";
import "./card.css";
import { useState } from "react";
interface Props {
  title?: string;
  text?: string;
  step?: number;
  projects?: boolean;
}
const Card = (props: Props) => {
  const [stepStyle, setStepStyle] = useState(false);

  return (
    <div
      className={stepStyle ? "card2" : "card"}
      onClick={() => setStepStyle(!stepStyle)}
    >
      {props.projects && <img src={image} alt="logo" className="image-card" />}
      {props.step === 1 && <FaLaptopCode color="orange" size={30} />}
      {props.step === 2 && <TbDeviceMobileCode color="orange" size={30} />}
      {props.step === 3 && <FaServer color="orange" size={30} />}
      <h2 className="card-title">
        {props.title ? props.title : "nenhum titulo"}
      </h2>
      <p className="card-text">
        {props.text
          ? props.text
          : "Nenhum texto aparentemente enviado para o card"}
      </p>
    </div>
  );
};

export default Card;
