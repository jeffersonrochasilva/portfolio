import Card from "../../commom/Card";
import "./projectsCamp.css";
const ProjectsCamp = () => {
  return (
    <div className="projectsCamp">
      <div className="projectsCamp-content">
        <span className="titles">Meus projetos</span>
      </div>
      <div className="projectsCamp-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default ProjectsCamp;
