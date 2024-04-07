import CVHeaderSection from "./CVHeaderSection";
import CVEducationSection from "./CVEducationSection";
import CVWorkSection from "./CVWorkSection";

export default function Resume({ personalInfo, educationArray, workArray }) {
  return (
    <div className="resume-container">
      <CVHeaderSection personalInfo={personalInfo} />
      <CVEducationSection educationArray={educationArray} />
      <CVWorkSection workArray={workArray} />
    </div>
  );
}
