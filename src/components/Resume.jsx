import CVHeaderSection from "./CVHeaderSection";

export default function Resume({ personalInfo }) {
  return (
    <div>
      <CVHeaderSection personalInfo={personalInfo} />
    </div>
  );
}
