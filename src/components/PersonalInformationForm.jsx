import Button from "./Button.jsx";

export default function PersonalInformationForm({
  personalInfo,
  handleFieldChange,
}) {
  return (
    <>
      <h2>Personal Information</h2>
      <form>
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
    </>
  );
}
