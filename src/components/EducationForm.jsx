import Field from "./Field.jsx";

export default function EducationForm() {
  return (
    <>
      <h2>Education</h2>
      <Field label="Degree" />
      <Field label="School" />
      <Field label="Location" />
      <Field label="Start Date" />
      <Field label="End Date" />
    </>
  );
}
