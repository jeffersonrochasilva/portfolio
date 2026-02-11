import Areas from "../../components/Areas";
import Initial from "../../components/Initial";
import Invite from "../../components/Invite";
import Projects from "../../components/Projets";
const Home = () => {
  return (
    <div className="containers">
      <Initial />
      <Areas />
      <Projects />
      <Invite />
    </div>
  );
};

export default Home;
