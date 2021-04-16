const EducationForm = ({ education, onChange, addEducationList }) => {
  return (
    <form className="profile-inputs-grid" onSubmit={addEducationList}>
      <input
        name="degree"
        onChange={onChange}
        value={education.degree}
        className="education-inputs degree"
        type="text"
        placeholder="Degree"
      />
      <input
        name="location"
        onChange={onChange}
        value={education.location}
        className="education-inputs degree-location"
        type="text"
        placeholder="Location"
      />
      <input
        name="institution"
        onChange={onChange}
        value={education.institution}
        className="education-inputs institution"
        type="text"
        placeholder="Institution"
      />
      <label>Start Date</label>
      <label>Finish Date</label>
      <input
        name="start"
        onChange={onChange}
        value={education.start}
        className="education-inputs start-date-degree"
        type="date"
        placeholder="dd-mm-yyyy"
      />
      <input
        name="end"
        onChange={onChange}
        value={education.end}
        className="education-inputs finish-date-degree"
        type="date"
        placeholder="dd-mm-yyyy"
      />
      <button className="add-education">Add Education</button>
    </form>
  );
};

export default EducationForm;
