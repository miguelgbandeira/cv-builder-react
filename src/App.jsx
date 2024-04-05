import "./App.css";
import EducationForm from "./components/EducationForm.jsx";
import PersonalInformationForm from "./components/PersonalInformationForm.jsx";
import WorkExperienceForm from "./components/WorkExperienceForm.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <PersonalInformationForm />
      <EducationForm />
      <WorkExperienceForm />
    </>
  );
}

export default App;
