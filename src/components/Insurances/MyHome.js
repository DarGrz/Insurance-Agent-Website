import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";

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
      <div className="container insurance-header">
        <h3>Mój Dom</h3>
      </div>
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
      {/* <InsuranceCard
        style={{ backgroundColor: "rgba(163, 206, 241)" }}
        className="container insurance-box"
        text={Text.text4}
      ></InsuranceCard> */}
    </div>
  );
};

export default MyHome;