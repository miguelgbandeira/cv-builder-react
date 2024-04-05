import "./App.css";
import EducationForm from "./components/EducationForm.jsx";
import Header from "./components/Header.jsx";
import PersonalInformationForm from "./components/PersonalInformationForm.jsx";
import Resume from "./components/Resume.jsx";
import WorkExperienceForm from "./components/WorkExperienceForm.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="builder-container">
        <div className="form">
          <PersonalInformationForm />
          <EducationForm />
          <WorkExperienceForm />
        </div>
        <div className="cv-container">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
