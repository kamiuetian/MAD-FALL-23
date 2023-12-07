import React, { useState } from "react";
import userContext from "./MyAppcontext";
const MyState = (props) => {
  let [name, setName] = useState("Kamran");
  const updateName = () => {
    setName("Qasim");
  };
  return (
    <userContext.Provider value={{ name, updateName }}>
      {props.children}
    </userContext.Provider>
  );
};

export default MyState;
