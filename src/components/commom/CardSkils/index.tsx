import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
interface Props {
  title?: string;
  step?: number;
  items?: string[];
}
import "./cardSkils.css";
const CardSkils = (props: Props) => {
  return (
    <div className="cardSkils">
      <div className="cardSkils-content">
        {props.step === 1 && <FaLaptopCode color="#58cc04" size={30} />}
        {props.step === 2 && <TbDeviceMobileCode color="#58cc04" size={30} />}
        {props.step === 3 && <FaServer color="#58cc04" size={30} />}
        <h2 className="card-title" style={{ color: "#58cc04" }}>
          {props.title ? props.title : "nenhum titulo"}
        </h2>
      </div>
      <div className="cardSkils-contentBox">
        {props.items?.map((name, index) => (
          <div key={index} className="cardSkils-contentBox-box">
            <span className="cardSkils-text">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardSkils;
