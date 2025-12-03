import "./header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useState } from "react";
const Header = () => {
  const [step, setStep] = useState<number>(0);
  const navigate = useNavigate();

  const goToPage = (param: string) => {
    setColor(param);
    navigate(param);
  };
  const setColor = (param: string) => {
    if (param === "/about") return setStep(1);

    if (param === "/projects") return setStep(2);

    if (param === "/contact") return setStep(3);

    if (param === "/curriculum") return setStep(4);

    if (param === "/") return setStep(0);
  };
  return (
    <div className="container">
      {/* <h2 className="title">Header Component</h2> */}
      <img src={logo} alt="logo" className="image" />
      <div className="contentleque">
        <span
          className="leque"
          onClick={() => goToPage("/")}
          style={step === 0 ? { color: "orange" } : {}}
        >
          Início
        </span>
        <span
          className="leque"
          onClick={() => goToPage("/about")}
          style={step === 1 ? { color: "orange" } : {}}
        >
          Sobre
        </span>
        <span
          className="leque"
          onClick={() => goToPage("/projects")}
          style={step === 2 ? { color: "orange" } : {}}
        >
          Projetos
        </span>

        <span
          className="leque"
          onClick={() => goToPage("/contact")}
          style={step === 3 ? { color: "orange" } : {}}
        >
          Contato
        </span>
        <span
          className="leque"
          onClick={() => goToPage("/curriculum")}
          style={step === 4 ? { color: "orange" } : {}}
        >
          Currículo
        </span>
      </div>
    </div>
  );
};

export default Header;
