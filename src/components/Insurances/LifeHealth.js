import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";
import VideoBox from "./VideoBox";
import LifeVideo from "../../videos/lifeinsurance.mp4";

// &#x2714; checkmark

const Text = {
  text1:
    "Do 800 000 zł w przypadku poważnej choroby (np. nowotworu) - otrzymujesz pieniądze na leczenie i świadczenia rodzinne",
  text2:
    "Leczenie za granicą do 2 000 000 euro - organizujemy wyjazd i opłacamy leczenie w najlepszych zagranicznych klinikach",
  text3:
    "Opłacanie bliskich pod nieobecność - ubezpieczenie na życie od 50 zł miesięcznie",
};

const LifeHealth = () => {
  return (
    <div className="insurance-container">
      <div className="container insurance-header">
        <h3>Życie i Zdrowie</h3>
      </div>

      <VideoBox video={LifeVideo} />

      <InsuranceCard
        className="container insurance-box"
        text={Text.text1}
      ></InsuranceCard>

      <InsuranceCard
        className="container insurance-box"
        style={{ backgroundColor: "rgba(163, 206, 241)" }}
        text={Text.text2}
      ></InsuranceCard>

      <InsuranceCard
        className="container insurance-box"
        text={Text.text3}
      ></InsuranceCard>
    </div>
  );
};

export default LifeHealth;
