import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import  { ParticleBg } from "./components/Particles";
import Home from "./pages/Home/Home";

const App = () => {

  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ParticleBg />
        <div style={{ position: "relative", zIndex: 1}}>
          <Navbar />
          {/* <Header /> */}
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
