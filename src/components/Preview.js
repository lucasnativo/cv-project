const Preview = ({ setPreview, cv }) => {
  const formatDate = (start, end) => {
    let yearStart = start.split("-")[0];
    let yearEnd = end.split("-")[0];
    let monthStart = start.split("-")[1];
    let monthEnd = end.split("-")[1];

    return (
      <>
        {monthStart} / {yearStart} - {monthEnd} / {yearEnd}
      </>
    );
  };
  return (
    <div className="cv">
      <div className="cv-profile">
        <div className="cv-name">
          <h1>{cv.profile.name}</h1>
        </div>
        <div className="profile-labels">Email: </div>
        <div className="profile-data">{cv.profile.email}</div>
        <div className="profile-labels">Phone: </div>
        <div className="profile-data">{cv.profile.ocupation}</div>
        <div className="profile-labels">Location: </div>
        <div className="profile-data">{cv.profile.country}</div>
        <div className="profile-labels">Linkedin: </div>
        <div className="profile-data">{cv.profile.city}</div>
      </div>
      <hr />
      <h1>Work Experience</h1>
      {cv.workList.map((item) => (
        <div key={item.title} className="work-item">
          <h2 className="work-item labels title">{item.title}</h2>
          <div className="work-item labels date">
            {formatDate(item.start, item.end)}
          </div>
          <div className="work-item labels company">
            {item.company} - {item.location}
          </div>
          <div className="work-item labels describe">{item.describe}</div>
        </div>
      ))}
      <hr />
      <h1>Education</h1>
      {cv.educationList.map((item) => (
        <div className="education-item" key={item.degree}>
          <h2 className="education-item labels degree">{item.degree}</h2>
          <div className="education-item labels date">
            {formatDate(item.start, item.end)}
          </div>
          <div>
            {item.institution} - {item.location}
          </div>
        </div>
      ))}

      <hr />
      <button onClick={() => setPreview(false)}>Back</button>
    </div>
  );
};

export default Preview;
