export default function CVWorkSection({ workArray }) {
  return (
    <div className="cv-education-container">
      <h2>Work Experience</h2>
      <div>
        {workArray.map((work) => {
          return (
            <div key={work.id}>
              <p>Position: {work.position}</p>
              <p>Company: {work.company}</p>
              <p>Location: {work.location}</p>
              <p>Start date: {work.startDate}</p>
              <p>End date: {work.endDate}</p>
              <p>Description: {work.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
