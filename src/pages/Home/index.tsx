import Areas from "../../components/Areas";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import Invite from "../../components/Invite";
import Projects from "../../components/Projets";
const Home = () => {
  return (
    <div className="containers">
      <Header />
      <Initial />
      <Areas />
      <Projects />
      <Invite />
      <Footer />
    </div>
  );
};

export default Home;
