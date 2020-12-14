import React, { useState } from "react";

const Social = () => {
  const [edit, setEdit] = useState(false);
  const [social, setSocial] = useState([
    { site: "Facebook", link: "facebook.com/lucas", id: 0 }
  ]);
  const [inputSite, setInputSite] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [id, setId] = useState(1);

  const onChangeSite = (e) => {
    setInputSite(e.target.value);
  };

  const onChangeLink = (e) => {
    setInputLink(e.target.value);
  };

  const deleteSite = (id) => {
    const removedArr = [...social].filter((site) => site.id !== id);
    setSocial(removedArr);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setSocial([...social, { site: inputSite, link: inputLink, id: id }]);
    setInputLink("");
    setInputSite("");
    setId(id + 1);
  };

  return (
    <div>
      <h3>Social</h3>
      <button onClick={() => setEdit(!edit)}>Edit</button>
      {edit ? (
        <div>
          <form onSubmit={onSubmit}>
            <label>
              Site: <input value={inputSite} onChange={onChangeSite} />
            </label>
            <label>
              Link: <input value={inputLink} onChange={onChangeLink} />
            </label>
            <button>Add</button>
          </form>
          <ul>
            {social.map((item, i) => (
              <li key={item.id}>
                {item.site}: {item.link}{" "}
                <button onClick={() => deleteSite(item.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <ul>
            {social.map((item) => (
              <li>
                {item.site}: {item.link}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Social;
