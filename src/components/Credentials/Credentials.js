import Card from "../../UI/Card";
import React from "react";
import "./Credentials.css";

const CREDENTIALS = [
  {
    name: "Agata",
    lastName: "Nowak",
    image:
      "https://images.generated.photos/6rLheYCYITx6m3yGmv00ydIlM97MZPV100e1oSqNn-M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM5MjUzLmpwZw.jpg",
    rating: 5,
    text: "Some text about company",
  },
  {
    name: "Ola",
    lastName: "Kwiatek",
    image:
      "https://images.generated.photos/CgFaZZVMU6dea1y_Qqbtfim7cAaRaW_FV-zBglk1-0Q/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE2OTQ5LmpwZw.jpg",
    rating: 5,
    text: "Some text about company",
  },
  {
    name: "Marcin",
    lastName: "Listek",
    image:
      "https://images.generated.photos/fmCoNmsaex4cWUrB7a26AYl72pvuOB6J7juHHWCTpl0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY5Mjg1LmpwZw.jpg",
    rating: 5,
    text: "Some text about company",
  },
  {
    name: "Kinga",
    lastName: "Witek",
    image:
      "https://images.generated.photos/5VdeQDqU4Rckx6fGwDe0FJr8pEd7c-IkB_wqbXBK-RA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY0NDgwLmpwZw.jpg",
    rating: 5,
    text: "Some text about company",
  },
  {
    name: "Marcin",
    lastName: "Listek",
    image:
      "https://images.generated.photos/fmCoNmsaex4cWUrB7a26AYl72pvuOB6J7juHHWCTpl0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY5Mjg1LmpwZw.jpg",
    rating: 5,
    text: "Some text about company",
  },
];

const Credentials = () => {
  return (
    <div className="credentials">
      <div className="container credentials-header">
        <h3>Credentials</h3>
      </div>
      <div className="container">
        <div className="credentials-cards">
          {CREDENTIALS.map((person) => (
            <Card className="cred-card">
              <h5>
                {person.name} {person.lastName}
              </h5>
              <img src={person.image} alt="person" />
              <p>{person.text}</p>
              <span>{person.rating} Here will be stars</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
