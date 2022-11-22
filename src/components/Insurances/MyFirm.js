import React from "react";
import InsuranceCard from "../../UI/InsuranceCard";
import "./Insurances.css";

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
      <div className="container insurance-header">
        <h3>Moja Firma</h3>
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

export default MyFirm;
