import CVHeaderSection from "./CVHeaderSection";
import CVEducationSection from "./CVEducationSection";

export default function Resume({ personalInfo, educationArray }) {
  return (
    <div className="resume-container">
      <CVHeaderSection personalInfo={personalInfo} />
      <CVEducationSection educationArray={educationArray} />
    </div>
  );
}
