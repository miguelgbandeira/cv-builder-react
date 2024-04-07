import Button from "./Button.jsx";

export default function WorkExperienceForm({
  work,
  handleFieldChange,
  handleAddWorkExperience,
}) {
  return (
    <>
      <h2>Work Experience</h2>
      <form>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          placeholder="React Developer"
          onChange={handleFieldChange}
          name="position"
          value={work.position}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          placeholder="The Odin Project Foundation"
          onChange={handleFieldChange}
          name="company"
          value={work.company}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="City, Country"
          onChange={handleFieldChange}
          name="location"
          value={work.location}
        />
        <label htmlFor="startDate">Start date</label>
        <input
          type="text"
          placeholder="dd/mm/yy"
          onChange={handleFieldChange}
          name="startDate"
          value={work.startDate}
        />
        <label htmlFor="endDate">End date</label>
        <input
          type="text"
          placeholder="dd/mm/yy"
          onChange={handleFieldChange}
          name="endDate"
          value={work.endDate}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Implement x feature..."
          onChange={handleFieldChange}
          name="description"
          value={work.description}
        />
        <Button
          textColor="black"
          backgroundColor=""
          text="Reset"
          onClick={() => null}
        />
        <Button
          textColor="white"
          backgroundColor="blue"
          text="Save"
          onClick={handleAddWorkExperience}
        />
      </form>
    </>
  );
}
