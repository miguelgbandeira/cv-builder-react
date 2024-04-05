import Field from "./Field.jsx";

export default function WorkExperienceForm() {
  return (
    <>
      <h2>Work Experience</h2>
      <Field label="Position" />
      <Field label="Company" />
      <Field label="Location" />
      <Field label="Start Date" />
      <Field label="End Date" />
      <Field label="Description" />
    </>
  );
}
