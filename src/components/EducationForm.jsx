import Button from "./Button.jsx";

export default function EducationForm({
  education,
  educationArray,
  handleFieldChange,
  handleAddEducation,
}) {
  return (
    <>
      <h2>Education</h2>
      <div>
        {educationArray.map((education) => {
          return (
            <div className="prevEducation" key={education.id}>
              <p>Degree: {education.degree}</p>
              <p>School: {education.school}</p>
              <Button
                textColor="black"
                backgroundColor=""
                text="Delete"
                onClick={() => null}
              />
            </div>
          );
        })}
      </div>
      <form>
        <label htmlFor="name">Degree Name</label>
        <input
          type="text"
          placeholder="Bachelor of..."
          onChange={handleFieldChange}
          name="degree"
          value={education.degree}
        />
        <label htmlFor="school">School</label>
        <input
          type="text"
          placeholder="University of..."
          onChange={handleFieldChange}
          name="school"
          value={education.school}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="Bachelor of..."
          onChange={handleFieldChange}
          name="location"
          value={education.location}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          placeholder="dd/mm/yy"
          onChange={handleFieldChange}
          name="startDate"
          value={education.startDate}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          placeholder="dd/mm/yy."
          onChange={handleFieldChange}
          name="endDate"
          value={education.endDate}
        />
        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          placeholder="17.6"
          onChange={handleFieldChange}
          name="grade"
          value={education.grade}
        />
        <Button
          textColor="black"
          backgroundColor=""
          text="Reset"
          onClick={() => null}
        />
        <Button
          text="Save"
          backgroundColor="blue"
          textColor="white"
          onClick={handleAddEducation}
        />
      </form>
    </>
  );
}
