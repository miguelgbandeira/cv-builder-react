import Button from "./Button.jsx";

export default function WorkExperienceForm({
  work,
  workArray,
  handleFieldChange,
  handleAddWorkExperience,
  handleOnDelete,
}) {
  return (
    <div className="form-container">
      <h2 className="form-header">Work Experience</h2>
      <div>
        {workArray.map((work) => {
          return (
            <div className="prev" key={work.id}>
              <p>
                {work.position}, {work.company}
              </p>
              <Button
                textColor="black"
                backgroundColor=""
                text="Delete"
                onClick={() => handleOnDelete(work.id)}
              />
            </div>
          );
        })}
      </div>
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
        <div className="buttons-container">
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
        </div>
      </form>
    </div>
  );
}
