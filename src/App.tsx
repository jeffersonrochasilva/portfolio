import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./router";
function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
