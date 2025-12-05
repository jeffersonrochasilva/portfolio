const Invite = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        padding: "40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        // background: "#58CC04",
        // background:
        //   "linear-gradient(90deg,rgba(255, 150, 2, 0.2),rgba(255, 150, 2, 1))",
        background:
          "linear-gradient(90deg,rgba(255, 150, 2, 0.2),rgba(255, 150, 2, 1),rgba(255, 150, 2, 0.2))",
      }}
    >
      <span className="titles">Vamos trabalhar juntos?</span>
      <div>
        <p className="texts" style={{ color: " white" }}>
          Estou disponível para projetos freelance, oportunidades de trabalho ou
          simplesmente para trocar
        </p>
        <p className="texts" style={{ color: " white" }}>
          ideias sobre desenvolvimento web/Mobile. Entre
        </p>
      </div>

      <button className="button">Entre em contato</button>
    </div>
  );
};
export default Invite;
