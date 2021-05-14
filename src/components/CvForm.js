import { useState } from "react";

const CvForm = () => {
  const [cv, setCv] = useState({
    profile: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkdedin: "",
    },
    workList: [],
    educationList: [],
  });

  const [work, setWork] = useState({
    title: "",
    location: "",
    company: "",
    start: "",
    end: "",
    describe: "",
  });

  const [education, setEducation] = useState({
    degree: "",
    location: "",
    institution: "",
    start: "",
    end: "",
  });

  const onChange = (e, obj, set) => {
    set({ ...obj, [e.target.name]: e.target.value });
  };

  return (
    <div className="cv-form">
      <div className="sec" onClick={(e) => e.target.lastChild.classList.toggle("show")}>
        Profile
        <div className="colab profile" >
        <label>
          Name
          <input
            name="name"
            value={cv.profile.name}
            onChange={(e) => onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={cv.profile.email}
            onChange={(e) => onChange}
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            value={cv.profile.phone}
            onChange={(e) => onChange}
          />
        </label>
        <label>
          Location
          <input
            name="location"
            value={cv.profile.location}
            onChange={(e) => onChange}
          />
        </label>
        <label>
          Linkedin
          <input
            name="linkedin"
            value={cv.profile.linkedin}
            onChange={(e) => onChange}
          />
        </label>
        </div>
      </div>
      <div className="sec work">
        <div className="colap">Work Experience</div>
        <div className="work list">Your works</div>
        <form>
          <label>
            Title
            <input name="title" value={work.title} onChange={(e) => onChange} />
          </label>
          <label>
            Location
            <input
              name="location"
              value={work.location}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            Company
            <input
              name="company"
              value={work.company}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            Start date
            <input name="start" value={work.start} onChange={(e) => onChange} />
          </label>
          <label>
            End date
            <input name="end" value={work.end} onChange={(e) => onChange} />
          </label>
          <label>
            Describe
            <input
              name="describe"
              value={work.describe}
              onChange={(e) => onChange}
            />
          </label>
          <button type="submit">Add work experience</button>
        </form>
      </div>
      <div className="sec education">
        <div className="colap">Education</div>
        <div className="education list">Your Education</div>
        <form>
          <label>
            Degree
            <input
              name="title"
              value={education.degree}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            Location
            <input
              name="location"
              value={education.location}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            Institution
            <input
              name="institution"
              value={education.institution}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            Start date
            <input
              name="start"
              value={education.start}
              onChange={(e) => onChange}
            />
          </label>
          <label>
            End date
            <input
              name="end"
              value={education.end}
              onChange={(e) => onChange}
            />
          </label>
          <button type="submit">Add education</button>
        </form>
      </div>
    </div>
  );
};

export default CvForm;
