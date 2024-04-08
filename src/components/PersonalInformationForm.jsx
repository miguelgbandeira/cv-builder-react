import Button from "./Button.jsx";
import "../styles/PersonalInformationForm.css";

export default function PersonalInformationForm({
  personalInfo,
  handleFieldChange,
}) {
  return (
    <div className="personal-info form-container">
      <h2 className="form-header">Personal Information</h2>
      <form className="personal-form-container">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleFieldChange}
          name="name"
          value={personalInfo.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={handleFieldChange}
          name="email"
          value={personalInfo.email}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={handleFieldChange}
          name="phoneNumber"
          value={personalInfo.phoneNumber}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="City, Country"
          onChange={handleFieldChange}
          name="location"
          value={personalInfo.location}
        />
      </form>
      <Button
        textColor="black"
        backgroundColor=""
        text="Reset"
        onClick={() => null}
      />
    </div>
  );
}
