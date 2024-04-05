import Field from "./Field.jsx";
import Button from "./Button.jsx";

export default function PersonalInformationForm({
  personalInfo,
  handleFieldChange,
}) {
  return (
    <>
      <h2>Personal Information</h2>
      <Field
        label="Full Name"
        value={personalInfo.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />
      <Field
        label="Email"
        value={personalInfo.email}
        onChange={(e) => handleFieldChange("email", e.target.value)}
      />
      <Field
        label="Phone Number"
        value={personalInfo.phoneNumber}
        onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
      />
      <Field
        label="Location"
        value={personalInfo.location}
        onChange={(e) => handleFieldChange("location", e.target.value)}
      />
      <Button
        textColor="white"
        backgroundColor="blue"
        text="Save"
        onClick={() => null}
      />
      <Button
        textColor="black"
        backgroundColor=""
        text="Reset"
        onClick={() => null}
      />
    </>
  );
}
