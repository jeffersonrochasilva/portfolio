import "./invite.css";
import { FaArrowRight } from "react-icons/fa";

const Invite = () => {
  function goToWhatsap() {
    const numero = "+5511917706038"; // DDI + DDD + número (sem espaços)
    const mensagem =
      "Olá! estou entrando em contato através do seu portfólio. Gostaria de saber mais sobre suas habilidades e projetos. Podemos conversar?"; // Mensagem pré-definida

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }
  return (
    <div className="invite">
      <div className="invite-content">
        <span className="titles">Vamos trabalhar juntos</span>
        <p className="texts">
          Estou disponível para projetos freelance, oportunidades de trabalho ou
          simplesmente para trocar ideias sobre desenvolvimento web/Mobile.
        </p>
        <button className="button" onClick={() => goToWhatsap()}>
          Entre em contato <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};
export default Invite;
