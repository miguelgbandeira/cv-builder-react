export default function CVEducationSection({ educationArray }) {
  return (
    <div className="cv-education-container">
      <h2>Education</h2>
      <div>
        {educationArray.map((education) => {
          return (
            <div key={education.id}>
              <p>Degree: {education.degree}</p>
              <p>School: {education.school}</p>
              <p>Location: {education.location}</p>
              <p>Start date: {education.startDate}</p>
              <p>End date: {education.endDate}</p>
              <p>Grade: {education.grade}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
