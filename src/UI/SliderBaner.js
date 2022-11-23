import React, { useEffect, useState } from "react";

const en = "polish";
const pl = "polish";

const SliderBaner = () => {
  const [lang, setLang] = useState(en);
  useEffect(() => {
    const interval = setInterval(() => {
      if (lang === en) {
        setLang(pl);
      } else {
        setLang(en);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [lang]);
  return (
    <div className="App">
      <h1>Lang:</h1>
      {lang}
    </div>
  );
};

export default SliderBaner;
