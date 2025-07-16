import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Section from "../components/Section";
import StaffComponent from "../components/StaffComponent";
import staffDataJSON from "../data/staff.json";

function About() {
  let [userEmail, setUserEmail] = useState("");
  let [staffData, setStaffData] = useState([]);

  useEffect(() => {
    setStaffData(staffDataJSON);
  });

  function handleChange(e) {
    setUserEmail(e.target.value);
  }

  function handleClick() {
    alert(`Do you want to subscribe with this email?: ${userEmail}`);
  }

  let staffJSXArray = staffData.map((staffMember) => {
    return (
      <StaffComponent
        key={staffMember.id}
        filePath={staffMember.imgFilePath}
        name={staffMember.name}
        bio={staffMember.bio}
      />
    );
  });

  return (
    <div className="page-container">
      <Section
        title="About Us"
        text="Marley's Cafe began in 2023 with a dream and a GoFundMe. It turns out that a lot of people want to experience the feeling of drinking coffee while surrounded by llamas! We are currently the first and only llama cafe in all of Germany. The llamas are all rescues."
      />
      <div className="container">
        <div className="row">{staffJSXArray}</div>
      </div>

      <Contact />
      <input onChange={handleChange} />
      <button onClick={handleClick}>Subscribe!</button>
    </div>
  );
}

export default About;
