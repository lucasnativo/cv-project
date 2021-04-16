import { useState } from "react";
import Preview from "./Preview";
import Sections from "./Sections";
import _ from "lodash";

const Body = () => {
  const [hideProfile, setHideProfile] = useState(true);
  const [hideWork, setHideWork] = useState(true);
  const [hideEducation, setHideEducation] = useState(true);
  const [id, setId] = useState(1);
  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [cvList, setCvList] = useState([]);
  const [preview, setPreview] = useState(false);
  const [cvPreview, setCvPreview] = useState({});

  const [profile, setProfile] = useState({
    name: "",
    ocupation: "",
    city: "",
    country: "",
    email: "",
    id: 1,
  });

  const [work, setWork] = useState({
    title: "",
    location: "",
    company: "",
    start: "",
    end: "",
    describe: "",
    id: _.uniqueId(),
  });

  const [education, setEducation] = useState({
    degree: "",
    location: "",
    institution: "",
    start: "",
    end: "",
    id: _.uniqueId(),
  });

  const saveCV = (e) => {
    e.preventDefault();
    let cv = {
      profile: { ...profile },
      workList: [...workList],
      educationList: [...educationList],
      id: id + 1,
    };
    setCvList([...cvList, cv]);

    setProfile({
      name: "",
      ocupation: "",
      city: "",
      country: "",
      email: "",
      id: id + 1,
    });

    setEducation({
      degree: "",
      location: "",
      institution: "",
      start: "",
      end: "",
      id: id + 1,
    });

    setWork({
      title: "",
      location: "",
      company: "",
      start: "",
      end: "",
      describe: "",
      id: id + 1,
    });

    setId(id + 1);
    setWorkList([]);
    setEducationList([]);
    setHideProfile(true);
    setHideEducation(true);
    setHideWork(true);
  };

  const removeCV = (id) => {
    const updatedList = cvList.filter((item) => item.id !== id);
    setCvList([...updatedList]);
  };

  const callPreview = (cv) => {
    setCvPreview(cv);
    setPreview(true);
  };

  return (
    <>
      {preview ? (
        <Preview setPreview={setPreview} cv={cvPreview} />
      ) : (
        <div className="body">
          <div className="cv-list">
            Saved CV
            {cvList.map((item) => (
              <div className="cv-list-item" key={item.profile.id}>
                <div>
                  {item.profile.name} - {item.profile.ocupation}
                </div>
                <div className="cv-list-item-btn">
                  <i
                    onClick={() => callPreview(item)}
                    className="far fa-eye"
                  ></i>
                  <i
                    onClick={() => removeCV(item.id)}
                    className="far fa-minus-square"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <Sections
            profile={profile}
            setProfile={setProfile}
            work={work}
            setWork={setWork}
            education={education}
            setEducation={setEducation}
            hideProfile={hideProfile}
            setHideProfile={setHideProfile}
            hideWork={hideWork}
            setHideWork={setHideWork}
            hideEducation={hideEducation}
            setHideEducation={setHideEducation}
          />
          <div>
            <button className="btn-save" onClick={saveCV}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
