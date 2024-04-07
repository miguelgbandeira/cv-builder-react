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
  const [workExperienceArray, setWorkExperienceArray] = useState([]);
  const [currentWork, setCurrWork] = useState({
    position: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
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

  function handleWorkExperienceChange(event) {
    const { name, value } = event.target;
    setCurrWork((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleAddWorkExperience(event) {
    event.preventDefault();
    setWorkExperienceArray([...workExperienceArray, currentWork]);
    setCurrWork({
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
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
          <WorkExperienceForm
            handleFieldChange={handleWorkExperienceChange}
            work={currentWork}
            handleAddWorkExperience={handleAddWorkExperience}
          />
        </div>
        <div className="cv-container">
          <Resume
            personalInfo={personalInfo}
            educationArray={educationArray}
            workArray={workExperienceArray}
          />
        </div>
      </div>
    </div>
  );
}
