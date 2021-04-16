const WorkForm = ({ work, onChange, addWorkInList }) => {
  return (
    <form className="work-inputs-grid" onSubmit={addWorkInList}>
      <input
        name="title"
        className="work-inputs title"
        type="text"
        onChange={onChange}
        value={work.title}
        placeholder="Job Title"
      />
      <input
        name="location"
        className="work-inputs location"
        type="text"
        onChange={onChange}
        value={work.location}
        placeholder="Location"
      />
      <input
        name="company"
        className="work-inputs company"
        type="text"
        onChange={onChange}
        value={work.company}
        placeholder="Company Name"
      />
      <label>Start Date</label>
      <label>Finish Date</label>
      <input
        onChange={onChange}
        value={work.start}
        name="start"
        className="work-inputs start-date"
        type="date"
        placeholder="dd-mm-yyyy"
      />
      <input
        onChange={onChange}
        name="end"
        value={work.end}
        className="work-inputs finish-date"
        type="date"
        placeholder="dd-mm-yyyy"
      />
      <textarea
        name="describe"
        onChange={onChange}
        value={work.describe}
        placeholder="Describe your job"
        className="textarea"
      />
      <button type="submit " className="add-work">
        Add work experience
      </button>
    </form>
  );
};

export default WorkForm;
