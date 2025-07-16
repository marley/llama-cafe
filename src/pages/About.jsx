import { useState } from "react";
import Contact from "../components/Contact";
import Section from "../components/Section";
import StaffComponent from "../components/StaffComponent";
import staffData from "../data/staff";

function About() {
  let [userEmail, setUserEmail] = useState("");

  function handleChange(e) {
    setUserEmail(e.target.value);
  }

  function handleClick() {
    alert(`Do you want to subscribe with this email?: ${userEmail}`);
  }

  return (
    <div className="page-container">
      <Section
        title="About Us"
        text="Marley's Cafe began in 2023 with a dream and a GoFundMe. It turns out that a lot of people want to experience the feeling of drinking coffee while surrounded by llamas! We are currently the first and only llama cafe in all of Germany. The llamas are all rescues."
      />
      <div className="container">
        <div className="row">
          <StaffComponent
            filePath={staffData[0].imgFilePath}
            name={staffData[0].name}
            bio={staffData[0].bio}
          />
          <StaffComponent
            filePath={staffData[1].imgFilePath}
            name={staffData[1].name}
            bio={staffData[1].bio}
          />
          <StaffComponent
            filePath={staffData[2].imgFilePath}
            name={staffData[2].name}
            bio={staffData[2].bio}
          />
        </div>
      </div>

      <Contact />
      <input onChange={handleChange} />
      <button onClick={handleClick}>Subscribe!</button>
    </div>
  );
}

export default About;
