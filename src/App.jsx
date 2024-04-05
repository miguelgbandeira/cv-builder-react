import "./App.css";
import EducationForm from "./components/EducationForm.jsx";
import Header from "./components/Header.jsx";
import PersonalInformationForm from "./components/PersonalInformationForm.jsx";
import Resume from "./components/Resume.jsx";
import WorkExperienceForm from "./components/WorkExperienceForm.jsx";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Full Name",
    email: "email@email.com",
    phoneNumber: "+1111111111",
    location: "City, Country",
  });

  function handleFieldChange(fieldName, value) {
    setPersonalInfo({ ...personalInfo, [fieldName]: value });
  }

  return (
    <div className="app">
      <Header />
      <div className="builder-container">
        <div className="form">
          <PersonalInformationForm
            personalInfo={personalInfo}
            handleFieldChange={handleFieldChange}
          />
          <EducationForm />
          <WorkExperienceForm />
        </div>
        <div className="cv-container">
          <Resume personalInfo={personalInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
