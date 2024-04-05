import "../styles/CVHeaderSection.css";

export default function CVHeaderSection({
  name,
  email,
  phoneNumber,
  location,
}) {
  return (
    <div className="cv-header-container">
      <h1 className="header-name">{name}</h1>
      <div className="subsection">
        <div className="email">{email}</div>
        <div className="phone-number">{phoneNumber}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
}
