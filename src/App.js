import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";

import Header from "./components/Header/Header";
import LifeHealth from "./components/Insurances/LifeHealth";
import MyCar from "./components/Insurances/MyCar";
import MyFirm from "./components/Insurances/MyFirm";
import MyHome from "./components/Insurances/MyHome";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/mycar" element={<MyCar />} />
        <Route path="/" element={<LifeHealth />} />
        <Route path="/myhome" element={<MyHome />} />
        <Route path="/myfirm" element={<MyFirm />} />
      </Routes>

      {/*About  */}

      {/* Offer */}

      {/* Kontakt & Map */}
    </>
  );
}

export default App;
