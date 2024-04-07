import "./App.css";
import uniqid from "uniqid";
import EducationForm from "./components/EducationForm.jsx";
import Header from "./components/Header.jsx";
import PersonalInformationForm from "./components/PersonalInformationForm.jsx";
import Resume from "./components/Resume.jsx";
import WorkExperienceForm from "./components/WorkExperienceForm.jsx";
import { useState } from "react";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [educationArray, setEducationArray] = useState([]);
  const [currentEducation, setCurrEducation] = useState({
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
    grade: "",
    id: uniqid(),
  });

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setCurrEducation((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleAddEducation(event) {
    event.preventDefault();
    setEducationArray([...educationArray, currentEducation]);
    setCurrEducation({
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
      grade: "",
      id: uniqid(),
    });
  }

  return (
    <div className="app">
      <Header />
      <div className="builder-container">
        <div className="form">
          <PersonalInformationForm
            personalInfo={personalInfo}
            handleFieldChange={handlePersonalInfoChange}
          />
          <EducationForm
            handleFieldChange={handleEducationChange}
            education={currentEducation}
            handleAddEducation={handleAddEducation}
          />
          <WorkExperienceForm />
        </div>
        <div className="cv-container">
          <Resume personalInfo={personalInfo} educationArray={educationArray} />
        </div>
      </div>
    </div>
  );
}
