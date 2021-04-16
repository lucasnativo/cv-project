import { useState } from "react";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import _ from "lodash";

const Sections = ({
  work,
  setWork,
  education,
  setEducation,
  profile,
  setProfile,
  hideProfile,
  setHideProfile,
  hideWork,
  setHideWork,
  hideEducation,
  setHideEducation,
}) => {
  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  const remove = (id, objList, setObjList) => {
    const updatedList = objList.filter((item) => item.id !== id);
    setObjList([...updatedList]);
  };

  const onChange = (e, obj, set) => {
    set({ ...obj, [e.target.name]: e.target.value });
  };

  const addWorkInList = (e) => {
    e.preventDefault();
    setWorkList([...workList, work]);
    setWork({
      title: "",
      location: "",
      company: "",
      start: "",
      end: "",
      describe: "",
      id: _.uniqueId(),
    });
  };

  const addEducationList = (e) => {
    e.preventDefault();
    setEducationList([...educationList, education]);
    setEducation({
      degree: "",
      location: "",
      institution: "",
      start: "",
      end: "",
      id: _.uniqueId(),
    });
  };

  return (
    <div className="section-container">
      <div className="section" onClick={() => setHideProfile(!hideProfile)}>
        <div>Profile</div>
        <i
          className={
            hideProfile ? "fas fa-angle-down" : "fas fa-angle-down rotate"
          }
        ></i>
      </div>

      <div
        className={
          hideProfile ? "profile-inputs-grid hide" : "profile-inputs-grid"
        }
      >
        <input
          name="name"
          value={profile.name}
          onChange={(e) => onChange(e, profile, setProfile)}
          className="profile-inputs name"
          type="text"
          placeholder="Full name"
        />
        <input
          name="ocupation"
          value={profile.ocupation}
          onChange={(e) => onChange(e, profile, setProfile)}
          className="profile-inputs ocupation"
          type="text"
          placeholder="Ocupation"
        />
        <input
          name="city"
          value={profile.city}
          onChange={(e) => onChange(e, profile, setProfile)}
          className="profile-inputs city"
          type="text"
          placeholder="City"
        />
        <input
          name="country"
          value={profile.country}
          onChange={(e) => onChange(e, profile, setProfile)}
          className="profile-inputs country"
          type="text"
          placeholder="Country"
        />
        <input
          name="email"
          value={profile.email}
          onChange={(e) => onChange(e, profile, setProfile)}
          className="profile-inputs email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="section" onClick={() => setHideWork(!hideWork)}>
        <div>Work Experience</div>
        <i
          className={
            hideWork ? "fas fa-angle-down" : "fas fa-angle-down rotate"
          }
        ></i>
      </div>
      <div className={hideWork ? "hide" : ""}>
        {workList.map((item) => {
          return (
            <div className="list" key={item.id}>
              {item.title}
              <div onClick={() => remove(item.id, workList, setWorkList)}>
                X
              </div>
            </div>
          );
        })}
        <WorkForm
          work={work}
          onChange={(e) => onChange(e, work, setWork)}
          addWorkInList={addWorkInList}
        />
      </div>
      <div className="section" onClick={() => setHideEducation(!hideEducation)}>
        <div>Education</div>
        <i
          className={
            hideEducation ? "fas fa-angle-down" : "fas fa-angle-down rotate"
          }
        ></i>
      </div>
      <div className={hideEducation ? "hide" : ""}>
        {educationList.map((item) => {
          return (
            <div className="education list" key={item.id}>
              {item.degree}
              <div
                onClick={() => remove(item.id, educationList, setEducationList)}
              >
                X
              </div>
            </div>
          );
        })}
        <EducationForm
          education={education}
          onChange={(e) => onChange(e, education, setEducation)}
          addEducationList={addEducationList}
        />
      </div>
    </div>
  );
};

export default Sections;
