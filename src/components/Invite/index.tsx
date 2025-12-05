import "./invite.css";
import { FaArrowRight } from "react-icons/fa";

const Invite = () => {
  return (
    <div className="invite">
      <div className="invite-content">
        <span className="titles">Vamos trabalhar juntos</span>
        <p className="texts">
          Estou disponível para projetos freelance, oportunidades de trabalho ou
          simplesmente para trocar ideias sobre desenvolvimento web/Mobile.
        </p>
        <button className="button">
          Entre em contato <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};
export default Invite;
