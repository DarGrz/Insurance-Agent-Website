import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LifeHealth from "./components/Insurances/LifeHealth";
import MyCar from "./components/Insurances/MyCar";
import MyFirm from "./components/Insurances/MyFirm";
import MyHome from "./components/Insurances/MyHome";
import LineBreaker from "./UI/LineBreaker";
import Credentials from "./components/Credentials/Credentials";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/Insurance-Agent-Website/mycar" element={<MyCar />} />
        <Route path="/Insurance-Agent-Website/" element={<LifeHealth />} />
        <Route path="/Insurance-Agent-Website/myhome" element={<MyHome />} />
        <Route path="/Insurance-Agent-Website/myfirm" element={<MyFirm />} />
      </Routes>
      <LineBreaker />

      {/* Slider Osiągnięcia */}

      <About />

      {/* Offer */}

      {/* Kontakt & Map */}
      <LineBreaker />
      <Credentials />
      <Footer />
    </>
  );
}

export default App;
