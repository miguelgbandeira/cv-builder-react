import "../styles/CVHeaderSection.css";

export default function CVHeaderSection({ personalInfo }) {
  return (
    <div className="cv-header-container">
      <h1 className="header-name">{personalInfo.name}</h1>
      <div className="subsection">
        <div className="email">{personalInfo.email}</div>
        <div className="phone-number">{personalInfo.phoneNumber}</div>
        <div className="location">{personalInfo.location}</div>
      </div>
    </div>
  );
}
