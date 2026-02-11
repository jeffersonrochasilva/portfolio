import "./presentation.css";
import { FaArrowRight } from "react-icons/fa";
import image from "../../../../assets/logo3.png";
const Presentation = () => {
  function goToWhatsap() {
    const numero = "+5511917706038"; // DDI + DDD + número (sem espaços)
    const mensagem =
      "Olá! estou entrando em contato através do seu portfólio. Gostaria de saber mais sobre suas habilidades e projetos. Podemos conversar?"; // Mensagem pré-definida

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }
  return (
    <div className="presentation">
      <div className="presentation-content">
        <span className="titles">Sobre min</span>
        <p className="texts">
          Meu nome é Jefferson e minha trajetória na programação começou pela
          curiosidade e vontade de criar soluções úteis. Trabalhei no
          desenvolvimento de sistemas de transporte marítimo e terrestre,
          experiência que me deu visão prática sobre escalabilidade, organização
          e responsabilidade técnica. Tenho habilidades em JavaScript, React,
          Vue e Git, e venho me aprofundando em React.js, Tailwind CSS e bancos
          de dados para ampliar minha atuação no desenvolvimento web. Gosto de
          criar interfaces funcionais e intuitivas, sempre buscando entregar
          qualidade e evolução constante. Sou dedicado, aprendo rápido e estou
          pronto para enfrentar novos desafios. Busco oportunidades onde eu
          possa aplicar meus conhecimentos, crescer profissionalmente e
          contribuir com projetos que gerem impacto real.
        </p>
        <button className="button" onClick={() => goToWhatsap()}>
          Entre em contato
          <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
      <div className="image-box">
        <div className="box one" style={{ background: "#58CC04" }} />
        <div className="box two" style={{ background: "#58CC04" }} />
        <div className="box three" style={{ background: "#58CC04" }} />
        <div className="box four" style={{ background: "#58CC04" }} />
        <img src={image} alt="imagemaltor" className="image-intial" />
      </div>
    </div>
  );
};

export default Presentation;
