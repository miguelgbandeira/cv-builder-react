import "../styles/HeaderSection.css";

export default function HeaderSection() {
  return (
    <div className="cv-header-container">
      <h1 className="header-name">Full Name</h1>
      <div className="subsection">
        <div className="email">Email</div>
        <div className="phone-number">Phone Number</div>
        <div className="location">Location</div>
      </div>
    </div>
  );
}
