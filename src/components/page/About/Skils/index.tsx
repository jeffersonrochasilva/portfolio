import CardSkils from "../../../commom/CardSkils";
import "./skils.css";
const Skils = () => {
  return (
    <div className="skils">
      <h2 className="titles" style={{ color: "gray" }}>
        Minhas Habilidades
      </h2>
      <p className="texts" style={{ textAlign: "start" }}>
        Tecnologias e ferramentas com as quais tenho experiência e conhecimento.
      </p>
      <div style={{ marginBottom: "100px" }}></div>
      <div className="skils-content">
        <CardSkils
          step={1}
          title="Fron-end"
          items={[
            "HTML",
            "CSS",
            "Javascript",
            "Rect",
            "Vue",
            "Typescript",
            "React Native",
          ]}
        />
        <CardSkils
          step={2}
          title="Back-end"
          items={[
            "HTML",
            "CSS",
            "Javascript",
            "Rect",
            "Vue",
            "Typescript",
            "React Native",
          ]}
        />
        <CardSkils
          step={3}
          title="Banco de dados"
          items={[
            "HTML",
            "CSS",
            "Javascript",
            "Rect",
            "Vue",
            "Typescript",
            "React Native",
          ]}
        />
      </div>
    </div>
  );
};

export default Skils;
