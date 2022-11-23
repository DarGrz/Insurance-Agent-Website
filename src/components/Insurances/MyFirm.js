import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";
import FirmVideo from "../../videos/company-insurance.mp4";
import VideoBox from "./VideoBox";

// &#x2714; checkmark

const Text = {
  text1: "Całodobowy dostęp do usług Assistance",
  text2: "Zabezpieczenie na wypadek szkód wyrządzonych osobom trzecim ",
  text3: "Ochrona majątku od pożaru i innych zdarzeń losowych ",
  //   text4: "Łatwy wybór spośród czterech pakietów ubezpieczeń",
};

const MyFirm = () => {
  return (
    <div className="insurance-container">
      <VideoBox video={FirmVideo} title="Moja Firma" />

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
    </div>
  );
};

export default MyFirm;
