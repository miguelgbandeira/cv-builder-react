import Field from "./Field.jsx";
import Button from "./Button.jsx";

export default function EducationForm() {
  return (
    <>
      <h2>Education</h2>
      <Field label="Degree" />
      <Field label="School" />
      <Field label="Location" />
      <Field label="Start Date" />
      <Field label="End Date" />
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
