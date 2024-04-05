import Field from "./Field.jsx";

export default function PersonalInformationForm() {
  return (
    <>
      <h2>Personal Information</h2>
      <Field label="Full Name" />
      <Field label="Email" />
      <Field label="Phone Number" />
      <Field label="Location" />
    </>
  );
}
