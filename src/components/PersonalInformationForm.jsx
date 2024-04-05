import Field from "./Field.jsx";
import Button from "./Button.jsx";

export default function PersonalInformationForm() {
  return (
    <>
      <h2>Personal Information</h2>
      <Field label="Full Name" />
      <Field label="Email" />
      <Field label="Phone Number" />
      <Field label="Location" />
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
