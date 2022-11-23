import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";
import VideoBox from "./VideoBox";
import CarVideo from "../../videos/pexels-rodnae-productions-8230808.mp4";

// &#x2714; checkmark

const Text = {
  text1: "Prosta obsługa i likwidacja szkód  ",
  text2: "Możliwość poszerzenia każdego pakietu o Assistance Maksymalny",
  text3: "Assistance w każdym pakiecie",
  text4: "Łatwy wybór spośród czterech pakietów ubezpieczeń",
};

const MyCar = () => {
  return (
    <div className="insurance-container">
      <VideoBox video={CarVideo} title="Mój Samochód" />

      <InsuranceCard
        className="container insurance-box"
        text={Text.text1}
      ></InsuranceCard>

      <InsuranceCard
        className="container insurance-box"
        text={Text.text2}
      ></InsuranceCard>

      <InsuranceCard
        className="container insurance-box"
        text={Text.text3}
      ></InsuranceCard>
      <InsuranceCard
        className="container insurance-box"
        text={Text.text4}
      ></InsuranceCard>
    </div>
  );
};

export default MyCar;
