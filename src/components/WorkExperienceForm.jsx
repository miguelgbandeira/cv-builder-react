import Field from "./Field.jsx";
import Button from "./Button.jsx";

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
        <Button
            textColor="white"
            backgroundColor="blue"
            text="Save"
            onClick={() => null} />
        <Button
            textColor="black"
            backgroundColor=""
            text="Reset"
            onClick={() => null} />
    </>
  );
}
