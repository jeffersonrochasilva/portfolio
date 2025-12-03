import Card from "../commom/Card";
import "./areas.css";

const Areas = () => {
  return (
    <div className="areas">
      <div className="box-content">
        <h1 className="titles">Minhas ares de trabalho</h1>
        <span className="texts">
          Construo aplicações modernas e otimizadas com foco total no usuário.
        </span>
      </div>
      <div className="cards">
        <Card
          step={1}
          title="Desenvolvedor Front-end"
          text="Criação de interfaces responsivas e interativas com React, TypeScript e as melhores práticas do mercado."
        />
        <Card
          step={2}
          title="Desenvolvedor Front-end Mobale"
          text="Desenvolvimento de aplicativos móveis com React Native, TypeScript e as melhores práticas do mercado."
        />
        <Card
          step={3}
          title="Desenvolvedor Back-end"
          text="Desenvolvimento de APIs robustas e eficientes com Node.js, Express e bancos de dados como PostgreSQL e MongoDB."
        />
      </div>
    </div>
  );
};
export default Areas;
