import React, { useState } from "react";
import ContactMe from "./ContactMe";
import FormEditable from "./FormEditable";

const ProfileList = () => {
  const [name, setName] = useState("Your Name");

  return (
    <>
      <FormEditable value={name} update={setName}/>
      <ContactMe />
    </>
  );
};

export default ProfileList;