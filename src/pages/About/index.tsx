import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/page/About/Presentation";
import Skils from "../../components/page/About/Skils";
const About = () => {
  return (
    <div className="containers">
      <Header />
      <Presentation />
      <Skils />
      <span>About page</span>
      <Footer />
    </div>
  );
};

export default About;
