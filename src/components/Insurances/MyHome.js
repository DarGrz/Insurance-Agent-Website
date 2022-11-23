import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";
import HouseVideo from "../../videos/house-insurance.mp4";
import VideoBox from "./VideoBox";

// &#x2714; checkmark

const Text = {
  text1:
    "Możliwość ubezpieczenia mieszkania, domu (również w budowie) lub ruchomości domowych",
  text2: "Łatwy wybór spośród trzech pakietów ubezpieczeń",
  text3: "Prosty proces likwidacji szkód",
  //   text4: "Łatwy wybór spośród czterech pakietów ubezpieczeń",
};

const MyHome = () => {
  return (
    <div className="insurance-container">
      <VideoBox video={HouseVideo} title="Mój Dom" />

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

export default MyHome;
